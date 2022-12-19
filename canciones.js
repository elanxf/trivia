const preguntas = [
    {
        pregunta: "¿Sabes con qué otro nombre se conoce a la Novena sinfonía de Beethoven?",
        descripcion: "Se trata de una obra muy importante, la Sinfonía n.º 9 en re menor, op. 125",
        opciones:["Pastoral", "Destino", "Coral"],
        respuesta: 2
    },
    {
        pregunta:"La música clásica estuvo una vez prohibida en China",
        descripcion:"Durante la Revolución Cultural de Mao Zedong",
        opciones:["Verdadero", "Falso"],
        respuesta: 0
    },
    {
        pregunta:"¿Recuerdas a qué edad murió Mozart?",
        descripcion: "Murió el 5 de diciembre de 1791"
        opciones: ["A los 25 años", "A los 26 años", "A los 35 años"]
        respuesta:2
    },
    {
        pregunta:"Vivaldi era un desastre. Tocaba música a horas extrañas y demasiado alto, y tenía la costumbre de gritarle a sus sirvientes acusándoles de haberle robado.",
        descripcion:"Fue un compositor, director de orquesta, pianista y profesor de piano alemán. Su legado musical abarca, cronológicamente, desde el Clasicismo hasta los inicios del Romanticismo",
        opciones:["Falso", "Verdadero"],
        respuesta: 0
    },
    {
        pregunta: "La lista de obras de este compositor incluye una buena cantidad de canciones divertidas y descaradas para beber.",
        descripcion:"Fue creador tanto de música culta como de divertidas y procaces canciones de taberna que eran habitualmente cantadas por borrachos con jarra de cerveza en mano.",
        opciones: ["Jean Sibelius", "Henry Purcell", "Franz Schubert"],
        respuesta:1
    },
];

const titulo = document.querySelector("#subContenedor__titulo");
const pregunta = document.querySelector("#subContenedor__pregunta");
const descripcion = document.querySelector("#subContenedor__descripcion");
const cajaOpciones = document.querySelector(".subContenedor__opciones");
const respuesta = document.querySelector("#contenedor__elemento");

window.onload = iniciarApliacion ();

function iniciarAplicacion(){
    console.log("Aplicacion iniciada");
    cargarPreguntaDescripcion();
    cargarOpciones();

}
