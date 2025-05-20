const form = document.getElementById("form")
const submitBtn = document.getElementById("submit");

function submitForm() {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    if (name.value.trim() === "" || email.value.trim() === "") {
        document.getElementById("error").innerText = "Please enter your name and email address so we can follow up with you. Fields cannot be blank.";
        return;
}

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    submitForm();
});}
