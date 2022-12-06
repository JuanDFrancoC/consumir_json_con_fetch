
const containerCard = document.querySelector('.container_card');
const url = "./json.json";

window.fetch(url).then(respuesta => respuesta.json()).then(respuestajson =>{
    console.log(respuestajson.Personas.forEach(datoPersona => {
       
        containerCard.insertAdjacentHTML('beforeend','<section class="card"><h2 class="nombre">'+datoPersona.Nombre+'</h2>\
        <p  class="descripcion">'+datoPersona.Descripcion+'</p><samp class="edad"><strong>Edad:</strong>'+datoPersona.Edad+'</samp>\
        <span class="nacimiento"><strong>Fecha Nacimiento:</strong>'+datoPersona.FechaNacimiento+'</span></section>');
    }))
});

