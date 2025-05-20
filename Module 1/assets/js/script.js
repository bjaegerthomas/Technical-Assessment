const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    submitForm();
});

function submitForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const error = document.getElementById("error");
    const success = document.getElementById("success");

    error.innerText = "";
    success.innerText = "";

    if (name.value.trim() === "" || email.value.trim() === "") {
        error.innerText = "Please enter your name and email address so we can follow up with you. Fields cannot be blank.";
        return;
    }

    success.innerText = "Thank you for your submission! We will be in touch soon.";

    name.value = "";
    email.value = "";
}
