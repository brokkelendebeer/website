const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    // Very insecure and very crap, i know
    if (username === "behoorlijk" && password === "beuken") {
        alert("You have successfully logged in.");
        window.location.replace("https://djgriffioen.live/track")
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})