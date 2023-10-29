document.addEventListener("DOMContentLoaded", function () {
    const submitLinkButton = document.getElementById("submitLinkButton");
    const enteredLinkInput = document.getElementById("enteredLink");
    const attendanceTable = document.getElementById("attendanceTable");

    submitLinkButton.addEventListener("click", function () {
        const enteredLink = enteredLinkInput.value;
        const nameClassArray = enteredLink.substring(39).split("-");

        if (enteredLink.startsWith("https://example.com/attendance/") && nameClassArray.length === 2) {
            let fullName = decodeURIComponent(nameClassArray[0].replace(/\+/g, ' '));
           
            // Remove numbers from the name
            fullName = fullName.replace(/\d+/g, '');

            const className = nameClassArray[1];
            const submissionTime = new Date().toLocaleString();

            const newRow = attendanceTable.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            cell1.textContent = fullName;
            cell2.textContent = className;
            cell3.textContent = submissionTime;
            console.log("Decoded Full Name:", fullName);
        } else {
            alert("Invalid link. Please enter a valid unique link.");
        }
    });


    
    
    
    
    
    

    const downloadButton = document.getElementById("downloadButton");
    downloadButton.addEventListener("click", function () {
        const table = document.getElementById("attendanceTable");
        const html = table.outerHTML;
        const blob = new Blob([html], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "attendance_table.xls";
        a.click();
        URL.revokeObjectURL(url);
    });
});