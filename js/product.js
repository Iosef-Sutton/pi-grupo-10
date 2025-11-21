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

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get('id');

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

        let btn = document.querySelector(".btn");
        btn.href = "category.html?category=" + data.category

//tags
        let productTags = document.querySelector(".tags");
        productTags.innerHTML = "";
        let tags = []

        if (data.tags){
            tags = data.tags
        }

        if (tags.length > 0){
            let cantidad = tags.length;
            if (cantidad > 3){
                cantidad = 3;}
            for (let i = 0; i < cantidad; i++) {
                let nuevoTag = "<span class='tag'> #" + tags[i] + "</span>";
                productTags.innerHTML = productTags.innerHTML + nuevoTag;
            }}
        else {
            productTags.innerHTML = "";
        }

//reviews
        let reviews = document.querySelector(".reviews-container");
        reviews.innerHTML = "";

        let allReviews;

        if (data.reviews){
            allReviews = data.reviews} 
        else {
            allReviews = [];}

        if (allReviews.length > 0){
            for (let i = 0; i < allReviews.length; i++) {
                let review = allReviews[i];

                let estrellas = "";
                for (let e = 0; e < review.rating; e++) {
                    estrellas = estrellas + "⭐️";}

                for (let e = review.rating; e < 5; e++) {
                    estrellas = estrellas + "☆";}

                let fechaReview = review.date;
                let fecha = "";
                for (let f = 0; f < 10; f++) {
                    fecha = fecha + fechaReview[f];}

                reviews.innerHTML = reviews.innerHTML +
                "<div class='review'>" +
                    "<p>" + estrellas + " — " + fecha + " — " + review.reviewerName + "</p>" +
                    "<p>" + review.comment + "</p>" +
                "</div>";
            }}
        else {
            reviews.innerHTML = "No hay reviews"
        }
    })
  
        .catch(function(error){
            console.log("Error:" + error);
    });