//Aca empieza el filtro de la barra buscadora
const form = document.querySelector(".search")
form.addEventListener('submit', function(e){
    e.preventDefault()
    const buscador = this.buscador.value.length
    if(buscador == ""){
        alert("Ingresa alguna palabra")
    } else if(buscador < 3){
        alert("Igresa por lo menos 3 caracteres")
    } else{
    form.submit()
    }
})
//Aca termina

//Aca empiezan los detalles del producto
fetch('https://dummyjson.com/products/1')
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        let imagen = document.querySelector(".product-img");
        imagen.src = data.thumbnail;
        imagen.alt = data.title;

        let titulo = document.querySelector(".product-title");
        titulo.innerHTML = data.title;

        let marca = document.querySelector(".marca");
        marca.innerHTML = "<strong>Marca: </strong>" + data.brand;

        let categoria = document.querySelector(".categoria");
        categoria.innerHTML = "<strong>Categoría: </strong> <a href='category.html?category=" + data.category + "'>" + data.category + "</a>";

        let stock = document.querySelector(".stock");
        stock.innerHTML = "<strong>Stock: </strong>" + data.stock + " unidades";

        let precio = document.querySelector(".precio");
        precio.innerHTML = "$ " + data.price;

        let descripcion = document.querySelector(".descripcion");
        descripcion.innerHTML = data.description;

        let productTags = document.querySelector(".tags");
        productTags.innerHTML = "";
        let tags = data.tags;
        let cantidad = tags.length;
        if (cantidad > 3) {cantidad = 3;}
        for (let i = 0; i < cantidad; i++) {
            let nuevoTag = "<span class='tag'>#" + tags[i] + "</span>";
            productTags.innerHTML = productTags.innerHTML + nuevoTag;
        }
        //FALTAN REVIEWS
    })

    .catch(function(error){
        console.log("Error:" + error);
    })