let formRegister = document.querySelector("#register-form");

formRegister.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let password2 = document.querySelector("#password2").value;
    let terminos = document.querySelector("#terminos").checked;

    
    let emailError = document.querySelector("#email-error");
    let passwordError = document.querySelector("#password-error");
    let password2Error = document.querySelector("#password2-error");
    let terminosError = document.querySelector("#terminos-error");

    
    emailError.innerText = "";
    passwordError.innerText = "";
    password2Error.innerText = "";
    terminosError.innerText = "";

    
    if (email === "") {
        emailError.innerText = "El email es obligatorio";
        return;
    }

    if (password === "") {
        passwordError.innerText = "La contraseña es obligatoria";
        return;
    }

    if (password.length < 6) {
        passwordError.innerText = "Debe tener al menos 6 caracteres";
        return;
    }

    if (password2 === "") {
        password2Error.innerText = "Repite la contraseña";
        return;
    }

    if (password !== password2) {
        password2Error.innerText = "Las contraseñas no coinciden";
        return;
    }

    if (!terminos) {
        terminosError.innerText = "Debes aceptar los términos";
        return;
    }

    formRegister.submit();
});
