let logoutLink = document.querySelector(".logout-link");

if (logoutLink) {
    logoutLink.addEventListener("click", function (e) {
    e.preventDefault(); 
        
    localStorage.removeItem("userEmail");  

    const saludoElemento = document.querySelector(".saludo");
    const listaElemento = document.querySelector(".lista");

    if (saludoElemento) {
    saludo.innerText = ""; 
    }

    if (listaElemento) {
      listaElemento.innerHTML = `
        <li><a href="./index.html">Home</a></li>
        <li><a href="./login.html">Login</a></li>
        <li><a href="./register.html">Registro</a></li>
      `;
    }
  });
}
     
     
        
        
        

