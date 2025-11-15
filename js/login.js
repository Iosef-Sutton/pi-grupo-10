let form = document.querySelector("#login-form");

form.addEventListener("submit", function () {

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

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

    localStorage.setItem("userEmail", email);

    return true; // permite que el formulario vaya a index.html
});
