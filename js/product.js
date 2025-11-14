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

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get('id')

fetch(`https://dummyjson.com/products/${id}`)
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
        if (cantidad > 3) {cantidad = 3};

        for (let i = 0; i < cantidad; i++) {
            let nuevoTag = "<span class='tag'>#" + tags[i] + "</span>";
            productTags.innerHTML = productTags.innerHTML + nuevoTag;
        }

        reviews(data.id);
    })

    .catch(function(error){
        console.log("Error: " + error);
    });


function reviews(id) {
    fetch(`https://dummyjson.com/products/${id}/reviews`)
        .then(function(response){
            return response.json();})

        .then(function(data){
            let reviews = document.querySelector(".reviews-container");
            reviews.innerHTML = "";

            for (let i = 0; i < data.reviews.length; i++) {
                let review = data.reviews[i];

                let estrellas = "";
                for (let i = 0; i < review.rating; i++) {
                    estrellas = estrellas + "⭐️";}

                for (let i = review.rating; i < 5; i++) {
                    estrellas = estrellas + "☆";}

                let fechaReview = review.date;
                let fecha = "";
                for (let i = 0; i < 10; i++) {
                    fecha = fecha + fechaReview[i];}

                reviews.innerHTML = reviews.innerHTML +
                "<div class='review'>" +
                    "<p>" + estrellas + " — " + fecha + " — " + review.reviewerName + "</p>" +
                    "<p>" + review.comment + "</p>" +
                "</div>";}})
  
        .catch(function(error){
            console.log("Error:" + error);
    });}