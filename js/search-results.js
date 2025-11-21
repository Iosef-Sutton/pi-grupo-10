//Aca empieza el filtro de la barra buscadora
const form = document.querySelector(".search ")
const input = document.querySelector(" .search input")

form.addEventListener('submit', function(e){
    e.preventDefault()
    let buscador = input.value.length
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
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let buscador = qsObj.get('search');

console.log(buscador)

const busqueda = document.querySelector('.section-title')
busqueda.innerHTML += `Resultados para: ${buscador}`

const oculto = document.querySelector('.section-title-hidden')
const category1 = document.querySelector('.product-list')

fetch('https://dummyjson.com/products/search?q=' + buscador)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let producto = data.products;
        let products = "";
        for(let i = 0; i < data.products.length; i++){
                products += `<article>
                <img src="${producto[i].images[0]}" alt="Producto ${i}">
                <h2>${producto[i].title}</h2>
                <p>${producto[i].description}</p>
                <p>$ ${producto[i].price}</p>
                <div><a href="./product.html?id=${producto[i].id}">Ver detalle</a></div>
                </article>`
                
    }

    category1.innerHTML = products;
    if(products == ''){
        busqueda.style.display = 'none'
        oculto.style.display = 'flex'
        oculto.innerHTML += `No hay resultados para: ${buscador}`

    }

})
    .catch(function(error) {
        console.log("Error: " + error);
    })
