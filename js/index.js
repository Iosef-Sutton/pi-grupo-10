const qs = location.search;
const qso = new URLSearchParams(qs);
const buscador = qso.get('Buscador');

if(buscador == ""){
    alert("Ingresa alguna palabra")
} else if(buscador.length < 3){
    alert("Igresa por lo menos 3 caracteres")
}