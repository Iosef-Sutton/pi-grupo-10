//Aca empieza el filtro de la barra buscadora
const form = document.querySelector(".search")
form.addEventListener('submit', function(e){
    e.preventDefault()
    const buscador = this.input.value.length
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
let buscador = qsObj.get('buscador');

const busqueda = document.querySelector('.section-title')
busqueda.innerHTML += `${buscador}`

const oculto = document.querySelector('.section-title-hidden')

fetch('https://dummyjson.com/products?limit=194')
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log(data.products);
        for(let i = 0; i < data.products.length; i++){
            let categoria = data.products.category
            let nombre_producto = data.products.title 
            let producto = data.products
            if(categoria == buscador){
                products += `<article>
                <img src="${producto.images[0]}" alt="Producto ${1}">
                <h2>${producto.title}</h2>
                <p>${producto.description}</p>
                <p>$ ${producto.price}</p>
                <div><a href="./product.html?id=${producto.id}">Ver detalle</a></div>
                </article>`
                category1.innerHTML = products;
            }else if(nombre_producto == buscador){
                products += `<article>
                <img src="${producto.images[0]}" alt="Producto ${1}">
                <h2>${producto.title}</h2>
                <p>${producto.description}</p>
                <p>$ ${producto.price}</p>
                <div><a href="./product.html?id=${producto.id}">Ver detalle</a></div>
                </article>`
                category1.innerHTML = products;
            }else{
                busqueda.style.display = 'none'
                oculto.style.display =  'flex'
                oculto.innerHTML += `${buscador}`
            }
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })

