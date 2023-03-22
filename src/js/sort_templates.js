window.onload = async () => {
    let startIndex = 0;
    const [prev, next, searchInput, selectSubject] = ["prev_button", "next_button", "template_search", "select_subject"].map(id => document.getElementById(id));
    let totalLength;

    await Wized.request.execute("Get templates");
    const data = await Wized.data.get("r.59.d");
    let filteredData = data || [];

    const filterTemplates = async (searchQuery = "") => {
        filteredData = data?.filter(template => {
            const group = template.group || [];
            const selectedSubject = selectSubject.value;
            const shouldShow = !selectedSubject || group.includes(selectedSubject);
            return shouldShow && template.show && template.header?.toLowerCase().startsWith(searchQuery.toLowerCase());
        }) || [];
        totalLength = filteredData.length;
        document.getElementById("total_templates_text").textContent = totalLength;
        document.getElementById("template_min_text").textContent = startIndex + 1;
        document.getElementById("template_max_text").textContent = Math.min(startIndex + 12, totalLength);
        const filteredTemplates = filteredData.slice(startIndex, startIndex + 12);
        await Wized.data.setVariable("template", filteredTemplates);
    };

    const updateTemplates = async (increment) => {
        startIndex += increment;
        await filterTemplates(searchInput.value);
    };

    next.addEventListener("click", async () => {
        if (startIndex + 12 < totalLength) await updateTemplates(12);
    });

    prev.addEventListener("click", async () => {
        if (startIndex > 0) await updateTemplates(-12);
    });

    searchInput.addEventListener("input", async () => {
        startIndex = 0;
        await filterTemplates(searchInput.value);
    });

    selectSubject.addEventListener("change", async () => {
        startIndex = 0;
        await filterTemplates(searchInput.value);
    });

    await filterTemplates();
};