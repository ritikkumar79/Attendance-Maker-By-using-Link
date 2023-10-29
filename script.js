document.addEventListener("DOMContentLoaded", function () {
    const uniqueLinkDisplay = document.getElementById("mainLink");
    const generateLinkButton = document.getElementById("LinkButton");

    generateLinkButton.addEventListener("click", function () {
        const name = document.getElementById("name").value; 
        const className = document.getElementById("class").value;
        const cleanedName = name.trim(); 
        const encodedName = encodeURIComponent(cleanedName);

        const spaces = encodeURIComponent(" ");
        const threeSpaces = spaces.repeat(3);

        const uniqueLink = `https://example.com/attendance/${threeSpaces}${encodedName}-${className}`;

        // Create input element to display the link
        const linkInput = document.createElement("input");
        linkInput.type = "text";
        linkInput.value = uniqueLink;
        linkInput.readOnly = true; 
        linkInput.style.width = "100%"; 
        uniqueLinkDisplay.innerHTML = ""; 
        uniqueLinkDisplay.appendChild(linkInput); 

        const attendanceLink = document.createElement("a");
        attendanceLink.href = `attendance.html?link=${encodeURIComponent(uniqueLink)}`; 
        document.body.appendChild(attendanceLink);
    });
});



