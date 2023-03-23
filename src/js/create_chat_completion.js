import { SSE } from "./functions/sse";
import { get } from "./functions/get";

document.addEventListener("DOMContentLoaded", () => {
    const elements = {
        generateButton: document.getElementById("generatebutton"),
        promptInput: document.getElementById("prompt_input"),
        streamedOutput: document.getElementById("streamedOutput"),
        loadingAnimation: document.getElementById("enter-loading-lottie"),
        outputButtons: document.getElementById("output_buttons"),
    };

    const state = {
        isSseRequested: false,
        outputText: "",
        lastRequestTime: 0,
    };

    elements.promptInput.addEventListener("keydown", handlePromptInputKeyDown);
    elements.generateButton.addEventListener("click", handleGenerateButtonClick);

    async function handleGenerateButtonClick() {
        if (state.isSseRequested || !canRequest()) {
            const remainingTime = 30 - Math.floor(hasReachedCooldown() / 1000);
            if (remainingTime > 0) {
                showRemainingTimeMessage(remainingTime);
                clearStreamedOutputText();
                await toggleView(2);
            }
            return;
        }
        state.isSseRequested = true;

        clearStreamedOutputText();
        await toggleView(2);
        toggleGenerateButton(false);
        toggleLoadingAnimation(true);

        const statusCode = await triggerLoadUserRequest();
        if (statusCode === 200) {
            const { active, template } = await fetchData();
            if (active || hasReachedCooldown()) {
                const body = buildRequestBody(template);
                const sse = createSseObject(body);
                sse.addEventListener("message", handleSseMessageEvent);
                sse.stream();
                state.lastRequestTime = Date.now();
            } else {
                handleNoCharactersAvailable();
            }
        } else {
            console.log("Error: status code is not 200");
        }
    }

    async function triggerLoadUserRequest() {
        await Wized.request.execute("Load user");
        return await Wized.data.get("r.3.$.statusCode");
    }

    function handlePromptInputKeyDown(event) {
        if (event.key === "Enter" && !event.shiftKey && !state.isSseRequested) {
            event.preventDefault();
            elements.generateButton.click();
        }
    }

    function handleSseMessageEvent(event) {
        const msg = event.data;
        if (msg === "[DONE]") {
            setOutputVar();
            handleSseRequestDone();
            return;
        }
        const data = JSON.parse(msg);
        const text = get(data.choices[0].delta, "content", "");
        state.outputText += text;
        appendStreamedOutputText(text);
    }

    function createSseObject(body) {
        return new SSE("https://scholarly-main-bd50e2e.zuplo.app/v1/post-stream", {
            headers: {
                "content-type": "application/json",
            },
            payload: JSON.stringify(body),
            method: "POST",
        });
    }

    async function toggleView(view) {
        await Wized.data.setVariable("view", view);
    }

    function toggleGenerateButton(visible) {
        elements.generateButton.style.display = visible ? "block" : "none";
    }

    function toggleLoadingAnimation(visible) {
        elements.loadingAnimation.style.display = visible ? "block" : "none";
        elements.outputButtons.style.display = visible ? "none" : "flex";
    }

    async function setOutputVar() {
        await Wized.data.setVariable("textoutput", state.outputText.trim());
    }

    function handleSseRequestDone() {
        state.isSseRequested = false;
        toggleGenerateButton(true);
        toggleLoadingAnimation(false);
        handleCharacters(elements.streamedOutput.innerHTML.length);
    }

    function clearStreamedOutputText() {
        elements.streamedOutput.innerHTML = "";
    }

    function appendStreamedOutputText(text) {
        const textWithLineBreaks = text.replace(/\n/g, "<br>");
        const isFirstText = elements.streamedOutput.innerHTML === "";
        const textToAdd = isFirstText ? text.replace(/^\n/, "") : textWithLineBreaks;
        elements.streamedOutput.innerHTML += textToAdd;
    }

    async function fetchData() {
        const active = await Wized.data.get("v.activeplan");
        const template = await Wized.data.get("v.selectedtemplate");
        return { active, template };
    }

    function buildRequestBody(template) {
        const inputVal = elements.promptInput.value;
        const contextInput = document.getElementById("context_input");
        const toneInput = document.getElementById("selector_input_tone");
        const styleInput = document.getElementById("selector_input_style");
        let content = template !== 0 ? template.completion.prompt : "[INPUT]";
        content = content.replace(/\[INPUT\]/g, inputVal);
        content = addContext(content, contextInput.value);
        content = addToneAndStyle(content, toneInput.value, styleInput.value);

        const body = {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content }],
            stream: true,
        };

        if (template !== 0) {
            Object.assign(body, {
                temperature: template.completion.temperature,
                top_p: template.completion.top_p,
                n: template.completion.n,
                presence_penalty: template.completion.presence_penalty,
                frequency_penalty: template.completion.frequency_penalty,
            });
        }

        return body;
    }

    function addContext(content, context) {
        if (context !== "") {
            content = `Using this context: ${context}.\n\n${content}`;
        }
        return content;
    }

    function addToneAndStyle(content, tone, style) {
        if (tone || style) {
            content += "\n\n";
            if (tone) content += `Write in this tone: ${tone}.`;
            if (style) content += `The output should use this writing style: ${style}.`;
        }
        return content;
    }

    async function handleNoCharactersAvailable() {
        console.log("Error: r.3.d.active is false or not enough time has passed");
        appendStreamedOutputText(
            "Error, you have run out of free characters. Please upgrade now for unlimited usage."
        );
        await Wized.data.setVariable("showupgrade", true);
    }

    async function handleCharacters(count) {
        await Wized.data.setVariable("charactersgenerated", count);
        await Wized.request.execute("Character Count");
    }

    function canRequest() {
        const active = state.active;
        const cooldown = 30 * 1000;
        const currentTime = Date.now();

        return active || (currentTime - state.lastRequestTime >= cooldown);
    }

    function hasReachedCooldown() {
        const cooldown = 30 * 1000;
        const currentTime = Date.now();

        return currentTime - state.lastRequestTime;
    }
    
    function showRemainingTimeMessage(remainingTime) {
        updateRemainingTimeMessage(remainingTime);
        const countdownInterval = setInterval(async () => {
            remainingTime--;
            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                await toggleView(1);
                clearStreamedOutputText();
            } else {
                updateRemainingTimeMessage(remainingTime);
            }
        }, 1000);
    }

    function updateRemainingTimeMessage(remainingTime) {
        const message = `Please wait ${remainingTime} seconds before the next request, or upgrade now to remove all restrictions.`;
        clearStreamedOutputText();
        appendStreamedOutputText(message);
    }

});