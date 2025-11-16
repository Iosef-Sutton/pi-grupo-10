//Aca empieza el filtro de la barra buscadora
const form = document.querySelector(".search")
form.addEventListener('submit', function(e){
    e.preventDefault()
    const buscador = this.buscador.value.length
    if(buscador == ""){
        alert("Ingresa alguna palabra")
    } else if(buscador < 3){
        alert("Ingresa por lo menos 3 caracteres")
    } else{
    form.submit()
    }
})
//Aca termina

//Aca empieza el resultado de la busqueda
fetch('')
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })

