let form = document.querySelector("#login-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let emailError = document.querySelector("#email-error");
    let passwordError = document.querySelector("#password-error");

    emailError.innerText = "";
    passwordError.innerText = "";

    if (email === "") {
        emailError.innerText ="El email es obligatorio";
        return; 
    }

    if (password === "") {
        passwordError.innerText="La contraseña es obligatoria";
        return;
    }

    if (password.length < 6) {
        passwordError.innerText = "La contraseña debe tener al menos 6 caracteres";
        return;
    }

    localStorage.setItem("userEmail", email);
     form.submit();

});
