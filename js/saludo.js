//parte b de log in
 
let userEmail = localStorage.getItem("userEmail");
let saludo = document.querySelector(".saludo");
let lista = document.querySelector(".lista");

if (userEmail) {
    saludo.innerText = "Bienvenido: " + userEmail;
    lista.innerHTML = `
        <li><a href="./index.html">Home</a></li>
        <li><a href="#" class="logout-link">Logout</a></li>
    `;
}
