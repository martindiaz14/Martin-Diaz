import { CardComponent } from "./componentes/cards.js";

let cardata = [
    {id : "1",img: "./Assets/im1.jpeg" ,tittle: "T-Shirt Oversize vintage CLUB negra", desc: "Remera diseño oversized, es decir, corte holgado en mangas, hombros y pecho. Confeccionada con tela de jersey peinado 24/1,calidad premium"
,price: "$5000" },
{
    id : "2",img: "Assets/oversize2.webp" ,tittle: "Remera Oversize Estampada 100%algodon Premium Clotex", desc: "Remera Estampada Oversize Fit LINEA PREMIUMCaracterísticas:- 100% Algodón jersey peinado 24/1 de máxima calidad.- Prenda armada en Overlock de 4 hilos reforzando costuras de seguridad.- No destiñe.- No encoje.- Cuello reeb al tono.- Tirillera de hombro a hombro.- TapaCostura con hilos de algodón en mangas y cintura.- Tira de limpieza.- Estampa de primera calidad"
    ,price: "$8000" 
},
{
    id : "3",img: "Assets/oversize3.1.webp" ,tittle: " Remera Oversize Rayada Grande Y Amplia Manga Corta", desc: " + Remeron amplio para todas las tallas, super amplio fresco y versátil.+ Busto 75 cm esta medida de sisa a sisa, un contorno seria aprox. 130 cm. que abarca sin estirar.+ Largo aprox 75.+ El corte de la remera Maxi, tal cual se muestra en las fotos."
    ,price: "$4000" 
},
{
    id : "4",img: "Assets/oversize4.1.webp" ,tittle: "Remerón Mujer Larga Algodon Liso Oversize", desc: "REMERON BASICAS11 COLORESInfaltable para completar tu Outfit° Confeccionadas en 100% ALGODÓN PEINADO INVISIBLE PREMIUM° Cuello redondo° Manga CaidaTALLES : TALLE L ( Abarca S - M - L )"
    ,price: "$4000" 
},
{
    id : "5",img: "Assets/oversize5.webp" ,tittle: " Remera Rusty Monk Oversize - Queen Island", desc: "La remera manga corta Rusty Monk es una prenda de diseño estampado con un calce Oversize. Está hecha de algodón peinado suave y cómodo. Estampado en la parte delantera y dorso .Etiquetas tejidas de alta calidad. Disponible en talle s al xl , es ideal para los amantes del surf y aquellos que buscan un estilo relajado y casual.Excelente diseño y calidad Tela 100% algodón Tejido: Jersey 30/1 Fit: Oversize Estampa: serigrafía Avios"
    ,price: "$10.000" 
},
{
    id : "6",img: "Assets/oversize6.webp" ,tittle: "Remeron Oversize Mujer Diseño Princesas Disney Y Personajes", desc: "REMERON OVERSIZE AMPLIO DISEÑO PRINCESAS DE DISNEY Y PERSONAJES ¡ Remeras de algodón de excelente calidad y estampadas con tus personajes animados preferidos ! M E D I D A S: 53 cm de axila a axila y 73 cm de largo"
    ,price: "$9000" 
},
{
    id : "7",img: "Assets/oversize7.webp" ,tittle: "Remera Hombre Farenheite Oversize Al Ambition", desc: "Marca:Farenheite -Modelo:Ambition-Género:Hombre-Edad:Adultos-Tipo de prenda:Remera-Diseño de la tela:Liso"
    ,price: "$8000" 
},
{
    id : "8",img: "Assets/oversize8.webp" ,tittle: " Remera Oversize Juvenil Unisex Doble Estampado M Al Xxl", desc: "linda remera en modelo PALM ANGELS oversize unisex , en varios colores tal cual la imágen de la publicación es sueltito fresco super cómodos del talle M al XXL"
    ,price: "$6000" 
},
]

let cardcontainer = document.getElementById('card')

window.addEventListener('load',() => {
const cards = cardata.map(e => {
    return CardComponent(e)
}).join('')

cardcontainer.innerHTML = cards
})