let btn = document.getElementById("btnCount");
let message = document.getElementById("message");

btn.addEventListener("click", () => {
    let headings = document.getElementsByTagName("h2");
    message.textContent = `The number of h2 tags are: ${headings.length}`;
    return message;
});
