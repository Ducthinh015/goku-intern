const greetingButton = document.getElementById("greetingButton");
const greetingMessage = document.getElementById("greetingMessage");

greetingButton.addEventListener("click", () => {
    greetingMessage.textContent =
        "Xin chào, tôi là Thịnh - IT Intern tại công ty Goku!";
});
