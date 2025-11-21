//Aca empieza la primera seccion
const category1 = document.querySelector('.Category1')
let products = "";

fetch('https://dummyjson.com/products/category/mens-watches')
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log(data.products);
        for( let i=0; i<data.products.length; i++){
            let producto = data.products[i]
            console.log(producto)
            products += `<article>
                            <img src="${producto.images[0]}" alt="Producto ${1}">
                            <h2>${producto.title}</h2>
                            <p>${producto.description}</p>
                            <p>$ ${producto.price}</p>
                            <div><a href="./product.html?id=${producto.id}">Ver detalle</a></div>
                        </article>`
        }
        category1.innerHTML = products;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })
//Aca termina la primera seccion
//Aca empieza la segunda seccion
const category2 = document.querySelector('.Category2')
let products2 = "";

fetch('https://dummyjson.com/products/category/womens-watches')
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log(data.products);
        for( let i=0; i<data.products.length; i++){
            let producto2 = data.products[i]
            console.log(producto2)
            products2 += `<article>
                            <img src="${producto2.images[0]}" alt="Producto ${1}">
                            <h2>${producto2.title}</h2>
                            <p>${producto2.description}</p>
                            <p>$ ${producto2.price}</p>
                            <div><a href="./product.html?id=${producto2.id}">Ver detalle</a></div>
                        </article>`
        }
        category2.innerHTML = products2;
    })
    .catch(function(error){
        console.log("Error: " + error);
    })
//Aca termina la segunda seccion

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
