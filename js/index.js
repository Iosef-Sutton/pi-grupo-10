//Aca empieza la pagina home
    //Aca empieza la primera seccion
const category1 = document.querySelector('.Category1')
let products = "";

fetch('https://dummyjson.com/products/category/mens-watches')
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log(data.products);
        for( let i=0; i<6; i++){
            let producto = data.products[i]
            console.log(producto)
            products += `<article>
                            <img src="${producto.images[0]}" alt="Producto ${1}">
                            <h2>${producto.title}</h2>
                            <p>${producto.description}</p>
                            <p>$ ${producto.price}</p>
                            <div><a href="./product.html">Ver detalle</a></div>
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
        for( let i=0; i<5; i++){
            let producto2 = data.products[i]
            console.log(producto2)
            products2 += `<article>
                            <img src="${producto2.images[0]}" alt="Producto ${1}">
                            <h2>${producto2.title}</h2>
                            <p>${producto2.description}</p>
                            <p>$ ${producto2.price}</p>
                            <div><a href="./product.html">Ver detalle</a></div>
                        </article>`
        }
        category2.innerHTML = products2;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })
    //Aca termina la segunda seccion
//Aca termina la home

//Aca empieza el filtro de la barra buscadora
const qs = location.search;
const qso = new URLSearchParams(qs);
const buscador = qso.get('Buscador');

if(buscador == ""){
    alert("Ingresa alguna palabra")
} else if(buscador.length < 3){
    alert("Igresa por lo menos 3 caracteres")
}
//Aca termina
