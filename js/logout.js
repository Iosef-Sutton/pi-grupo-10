let logoutLink = document.querySelector(".logout-link");
let saludo = document.querySelector(".saludo");
let lista = document.querySelector(".lista");

if (logoutLink) {
    logoutLink.addEventListener("click", function () {
        
        localStorage.removeItem("userEmail");  

        saludo.innerText = ""; 

        lista.innerHTML = `
            <li><a href="./index.html">Home</a></li>
            <li><a href="./login.html">Login</a></li>
            <li><a href="./register.html">Registro</a></li>
        `;
    });
}
