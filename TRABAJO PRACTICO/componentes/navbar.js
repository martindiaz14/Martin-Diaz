const url = 'http://127.0.0.1:5500/';

const navElements = [
{tittle : 'Oversized T-shirts', link: `${url}categoria1.html`},
{tittle : 'Sleeveless T-shirts', link: `${url}categoria2.html`},
{tittle : 'Long sleeve T-shirts', link: `${url}categoria3.html`}
]


export const navBarComponent = `<nav class = "barra">   
<a href="home.html"><img src="Assets/6139303 (1).png" alt="casita.png" width="100" height="100" id = "icono"></a> 
 
<h1 id = "tit">Second Twin Store</h1>   
<ul> 
${
navElements.map(e=>{
return `<a href=${e.link}>${e.tittle}</a>`}).join('')}
<button class = "btnlogout" id = "logout">
Logout
</button></ul>
<script src = "index.js"></script>
</nav>`




