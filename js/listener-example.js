/**
 * Explain what an "event-listener" is, and then write one with a related Javascript function 
 * that you can imagine a developer at Google may have written when building Google Forms. Be sure to 
 * comment an explanation. Paste the code here, or, preferably, link to a publicly shared Google Drive 
 * Folder or GitHub repository with the files or screenshots of the code. 
 */
 
 const nameTextarea = document.getElementById("textArea01");
 const warningLabel = document.getElementById("warning");

 document.addEventListener("click", (event) => {
    let isClickInside = nameTextarea.contains(event.target);


    if (!isClickInside) {
        if(nameTextarea.value == ""){
            warningLabel.innerHTML = "This is a required textarea";
        } else {
            warningLabel.innerHTML = "";
        }
    }
 });