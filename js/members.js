const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
    const currentDate = (new Date()).toISOString().substr(0, 10); 
    const rows = Array.from(document.querySelectorAll("#myTable tr"));
    const data = rows
        .filter((_, index) => index !== 0)
        .map((row) => {
            const name = row.querySelector("td:first-child").textContent;
            const selectedValue = row.querySelector("select").value;
            return `${name}, ${selectedValue}\n\n`;
        })
        .join("");
    const blob = new Blob([new TextEncoder().encode(data)], {type: "text/plain;charset=UTF-8"});
    const url = URL.createObjectURL(blob);
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = url;
    downloadLink.download = `Список_присутствующих_${currentDate}.txt`;
    downloadLink.click();
    URL.revokeObjectURL(url);
});
