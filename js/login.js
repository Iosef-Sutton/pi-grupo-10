let form = document.querySelector("#login-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let passwordError = document.querySelector("#password-error");
    passwordError.innerText = "";


    if (email === "") {
        alert("El email es obligatorio");
        return; 
    }

    if (password === "") {
        alert("La contraseña es obligatoria");
        return;
    }

    if (password.length < 6) {
        passwordError.innerText = "La contraseña debe tener al menos 6 caracteres";
        return;
    }

    localStorage.setItem("userEmail", email);
     form.submit();

});
