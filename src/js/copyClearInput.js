document.addEventListener("DOMContentLoaded", function () {
    const newButton = document.getElementById("new_button");
    const promptInput = document.getElementById("prompt_input");
    const copyButton = document.getElementById("copy_button");
    const streamedOutput = document.getElementById("streamedOutput");

    newButton.addEventListener("click", function () {
        promptInput.value = "";
    });

    copyButton.addEventListener("click", async function () {
        const textArea = document.createElement('textarea');
        textArea.value = await Wized.data.get("v.textoutput");
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        alert('Text copied to clipboard!');
    });
});
