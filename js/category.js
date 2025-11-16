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

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let category = qsObj.get('category');

let titulo = document.querySelector(".category-title");
let contenedor = document.querySelector(".category-products");

// 3) Mostrar el nombre de la categoría
titulo.innerText = "Productos de: " + category;

// 4) Buscar los productos de esa categoría
fetch(`https://dummyjson.com/products/category/${category}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.products);

        let html = "";

        for (let i = 0; i < data.products.length; i++) {
            let producto = data.products[i];

            html += `
                <article class="product-card">
                    <img src="${producto.images[0]}" alt="${producto.title}">
                    <h2>${producto.title}</h2>
                    <p>${producto.description}</p>
                    <p>$ ${producto.price}</p>
                    <a class="btn" href="product.html?id=${producto.id}">Ver detalle</a>
                </article>
            `;
        }

        // 5) Imprimir los productos
        contenedor.innerHTML = html;
    })
    .catch(function(error){
        console.log("Error: " + error);
    });

