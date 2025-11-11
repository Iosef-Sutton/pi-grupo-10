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
            let numero = data.products[i]
            console.log(numero)
            products += `<article>
                            <img src="" alt="Producto ${1}">
                            <h2>${numero.title}</h2>
                            <p>${numero.description}</p>
                            <p>$ ${numero.price}</p>
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

fetch('https://dummyjson.com/products/category/womens-watches')
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log();
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })
    //Aca termina la segunda seccion
//Aca termina la home

