import { CardComponent } from "./componentes/cards.js";

let cardata = [
    {id : "1",img: "./Assets/im1.jpeg" ,tittle: "T-Shirt Oversize vintage CLUB negra", desc: "Remera diseño oversized, es decir, corte holgado en mangas, hombros y pecho. Confeccionada con tela de jersey peinado 24/1,calidad premium"
,price: "$5000" },
{
    id : "19",img: "Assets/man3.webp" ,tittle: " Polera Térmica De Hombre Frizada Manga Larga Super Abrigada", desc: "Polera térmica de hombre. Frizada en el interior, reforzadas con doble costura, calce perfecto. De poliéster con elastano. Mantienen la temperatura corporal, ideal para cualquier tipo de entrenamiento o para todos los días, debajo de tu ropa habitual"
    ,price: "$9000" 
},
{
    id : "3",img: "Assets/oversize3.1.webp" ,tittle: " Remera Oversize Rayada Grande Y Amplia Manga Corta", desc: " + Remeron amplio para todas las tallas, super amplio fresco y versátil.+ Busto 75 cm esta medida de sisa a sisa, un contorno seria aprox. 130 cm. que abarca sin estirar.+ Largo aprox 75.+ El corte de la remera Maxi, tal cual se muestra en las fotos."
    ,price: "$4000" 
},
{
    id : "13",img: "Assets/mus5.webp" ,tittle: " Musculosa  Mujer Morley Moda Talle S-xxl", desc: "ARTICULO SUPER COMODO DE MODA Y MUY VERSATILMORLEY DE ALTO SPANDEX , LO QUE LO HACE UN PRODUCTO QUE SE ADAPTA A -------VARIOS TALLES DESDE EL S AL XXL POR QUE SE ESTIRA MUCHISIMO"
    ,price: "$3000" 
},
{
    id : "21",img: "Assets/man5.webp" ,tittle: "  Remera Manga Larga Niños Buzz Lightyear Disney® Pelicula", desc: "A los niños les encantará esta nueva remera manga larga Disney® Original de Toy Story 4! Esta prenda es perfecta para el uso urbano, hecha con la mejor calidad de algodón, con un diseño de Toy Story 4 que los hará sentirse parte de la magia de Disney. La remera cuenta con un cuello redondo y manga larga, ideal para los niños que necesitan un look más moderno"
    ,price: "$2000" 
},
{
    id : "23",img: "Assets/man7.webp" ,tittle: " Pack Por 2 Remeras Algodón Manga Larga Hombre Talles 1 Al 6", desc: "Remera algodón manga larga hombre EL PRECIO ES POR 2 UNIDADES"
    ,price: "$15.000" 
},
{
    id : "6",img: "Assets/oversize6.webp" ,tittle: "Remeron Oversize Mujer Diseño Princesas Disney Y Personajes", desc: "REMERON OVERSIZE AMPLIO DISEÑO PRINCESAS DE DISNEY Y PERSONAJES ¡ Remeras de algodón de excelente calidad y estampadas con tus personajes animados preferidos ! M E D I D A S: 53 cm de axila a axila y 73 cm de largo"
    ,price: "$9000" 
},
{
    id : "16",img: "Assets/mus8.webp" ,tittle: " Musculosa Olimpica Golds Gym Gimnasio Crossfit", desc: "Remeras musculosas para lucir en tu gimnasio.Muchos de nuestros diseños son exclusivos que difícilmente encontraras en otro lugar.Nuestras remeras son de 100% algodón. Los estampados están hechos con vinilo importado."
    ,price: "$8000" 
},
]

let cardcontainer = document.getElementById('card')

window.addEventListener('load',() => {
const cards = cardata.map(e => {
    return CardComponent(e)
}).join('')

cardcontainer.innerHTML = cards
})