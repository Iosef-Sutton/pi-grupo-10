let formRegister = document.querySelector("register-form");
let emailInput = document.querySelector("email");
let passwordInput = document.querySelector("password");
let password2Input = document.querySelector("password2");
let terminosInput = document.querySelector("terminos");

formRegister.addEventListener("submit", function () {

    let email = emailInput.value;
    let password = passwordInput.value;
    let password2 = password2Input.value;
    let aceptaTerminos = terminosInput.checked;

    
    if (email === "") {
        alert("El email es obligatorio");
        return false;
    }

    if (password === "") {
        alert("La contraseña es obligatoria");
        return false;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return false;
    }

    if (password2 === "") {
        alert(" repetir la contraseña");
        return false;
    }

    if (password !== password2) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    if (!aceptaTerminos) {
        alert("Debes aceptar los términos y condiciones");
        return false;
    }

    return true;
});
