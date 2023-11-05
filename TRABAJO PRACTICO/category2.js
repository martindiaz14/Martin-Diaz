import { CardComponent } from "./componentes/cards.js";

let cardata = [
    {id : "9",img: "Assets/111.jpg" ,tittle: "  T-Shirt Lakers Violet James", desc: "Camiseta para Niños Oficial Nba A Lakers Lebron James- Equipo: Angeles Lakers - Dorsal (Lebron James)- Licencia Oficial NBA- Color: Amarillo- Color: Negro- Marca: NBA Athletic PRODUCTO CON LICENCIA OFICIAL DE LA NBA."
,price: "$4000" },
{
    id : "10",img: "Assets/musculosa2.webp" ,tittle: "Musculosa Lisas De Jersey 100% Algodón", desc: "Tela: Algodón Jersey 24/1 Peinado. *Cuello: En Tela de Rib. *ALGODON PEINADO *COLORES: NEGRO, VERDE y BLANCO *TALLES DEL XS AL 3XL"
    ,price: "$3000" 
},
{
    id : "11",img: "Assets/mus3.webp" ,tittle: " Musculosa Capucha Entrenamiento Sudadera Gym Gdo Workout", desc: " Confeccionadas en set de Poliester de primera calidad.- corte regular fit: corte normal (no son ajustadas)- Sirven para toda disciplina deportiva. gym, entranamiento funcional, running, boxeo y mucho mas.- Útiles tanto para actividades indoor como outdoor"
    ,price: "$7000" 
},
{
    id : "12",img: "Assets/mus4.webp" ,tittle: "  Musculosa X3 Tiras Bretel Mujer Algodón Pora", desc: "Camiseta de bretel, x3 el material es de algodon Marca: Pora Talles: 1-2-3-4-5"
    ,price: "$6000" 
},
{
    id : "13",img: "Assets/mus5.webp" ,tittle: " Musculosa  Mujer Morley Moda Talle S-xxl", desc: "ARTICULO SUPER COMODO DE MODA Y MUY VERSATILMORLEY DE ALTO SPANDEX , LO QUE LO HACE UN PRODUCTO QUE SE ADAPTA A -------VARIOS TALLES DESDE EL S AL XXL POR QUE SE ESTIRA MUCHISIMO"
    ,price: "$3000" 
},
{
    id : "14",img: "Assets/mus6.webp" ,tittle: " Musculosas Deportiva Entrenamiento Gimnasio G6", desc: "Musculosas Pechera Deportiva Gimnasio Futbol Entrenamiento LISA en Jersey Set de poliéster.Apto sublimado y estampado (no damos ese servicio)El packs es de 3 musculosas mismo talle y los colores que ofrece la foto."
    ,price: "$5000" 
},
{
    id : "15",img: "Assets/mus7.webp" ,tittle: " Pack X 3 Remeras Musculosas Nenes Estampadas Talles 2 Al 16", desc: "PACK POR 3 REMERAS MUSCULOSAS DE NENES ESTAMPAS VARIASTALLES DEL 2 AL 16"
    ,price: "$18.000" 
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