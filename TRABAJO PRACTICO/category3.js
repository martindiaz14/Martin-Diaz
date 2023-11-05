import { CardComponent } from "./componentes/cards.js";

let cardata = [
    {id : "17",img: "Assets/222.webp" ,tittle: "Erima Liga Long Sleeves", desc: "FUNCTIONAL JERSEY WITH VENTILATION.The LIGA TRIKOT is a real classic. The light material dries quickly. Mesh inserts provide targeted. ventilation. Plain and plain you will cut a good figure in every sport"
    ,price: "$6000" 
},
{
    id : "2",img: "Assets/man2.webp" ,tittle: " Remeras Lisas Algodón Mangas Largas S - Xxl", desc: "Jersey 100% Algodón 24/1"
    ,price: "$5000" 
},
{
    id : "19",img: "Assets/man3.webp" ,tittle: " Polera Térmica De Hombre Frizada Manga Larga Super Abrigada", desc: "Polera térmica de hombre. Frizada en el interior, reforzadas con doble costura, calce perfecto. De poliéster con elastano. Mantienen la temperatura corporal, ideal para cualquier tipo de entrenamiento o para todos los días, debajo de tu ropa habitual"
    ,price: "$9000" 
},
{
    id : "20",img: "Assets/man4.webp" ,tittle: "Remera Proteccion Solar Aire Libre Unisex Payo", desc: "Diseñada para adultos , con la misma calidad de siempre esta remera técnica otorga comodidad y proteccion a la hora de realizar todo tipo de actividad al aire libre "
    ,price: "$8000" 
},
{
    id : "21",img: "Assets/man5.webp" ,tittle: "  Remera Manga Larga Niños Buzz Lightyear Disney® Pelicula", desc: "A los niños les encantará esta nueva remera manga larga Disney® Original de Toy Story 4! Esta prenda es perfecta para el uso urbano, hecha con la mejor calidad de algodón, con un diseño de Toy Story 4 que los hará sentirse parte de la magia de Disney. La remera cuenta con un cuello redondo y manga larga, ideal para los niños que necesitan un look más moderno"
    ,price: "$2000" 
},
{
    id : "22",img: "Assets/man6.webp" ,tittle: "Remera Niño Manga Larga Avengers Licencia Oficial Marvel®", desc: "La Remera Niño Manga Larga Avengers Vengadores Marvel® es la prenda perfecta para los fanáticos de los superhéroes. Esta remera es ideal para los niños con un estilo urbano. Está confeccionada en algodón 100% de alta calidad y su diseño de los Avengers le da un toque moderno y divertido. La remera de manga larga cuenta con un cuello redondo y está disponible en talles desde T2 a 14. Esta prenda es cómoda, liviana y resistente. Además, es resistente al lavado y no se desgasta con el tiempo."
    ,price: "$4000" 
},
{
    id : "23",img: "Assets/man7.webp" ,tittle: " Pack Por 2 Remeras Algodón Manga Larga Hombre Talles 1 Al 6", desc: "Remera algodón manga larga hombre EL PRECIO ES POR 2 UNIDADES"
    ,price: "$15.000" 
},
{
    id : "24",img: "Assets/man8.webp" ,tittle: " Remera Camiseta Manga Larga De Morley Melody S-m-l Full", desc: "HERMOSA REMERA BÁSICA CONFECCIONADA EN MODAL CON LYCRA OTOÑO-INVIERNO"
    ,price: "$5000" 
},
]
let cardcontainer = document.getElementById('card')

window.addEventListener('load',() => {
const cards = cardata.map(e => {
    return CardComponent(e)
}).join('')

cardcontainer.innerHTML = cards
})