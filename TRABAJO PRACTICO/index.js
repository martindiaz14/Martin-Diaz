import { navBarComponent } from "./componentes/navbar.js";

let navcontainer = document.querySelector('header');

window.addEventListener('load',()=>{
    navcontainer.innerHTML = navBarComponent;
    document.title = "Second Twin";
})




document.addEventListener("DOMContentLoaded", function() {
const usuariosRegistrados = [];
const registro = document.getElementById("register");

const registroForm = document.getElementById("registroForm");
registroForm.addEventListener("submit", function(event) {
    if(nombre == "" && apellido == "" && correo == "" && contraseña == "" && fechadenacimiento == ""){
        alert("complete todos los campos antes de seguir");
        return;
    }
    else{
    const nombre = document.getElementById("regname").value;
    const apellido = document.getElementById("reglastname").value;
    const correo = document.getElementById("regmail").value;
    const contraseña = document.getElementById("regpassword").value;
    const fechadenacimiento = document.getElementById("regdate").value;
    usuariosRegistrados.push({nombre,apellido, correo, contraseña ,fechadenacimiento});
    alert("Registro exitoso");
    registroForm.reset();
    }
    
    });
const loginForm = document.getElementById("LoginForm");
loginForm.addEventListener("click", function(event) {
    if(correo == "" && contraseña == ""){
        alert("Complete los campos");  
        return;   
    }else{
    const correo = document.getElementById("logmail").value;
    const contraseña = document.getElementById("logpassword").value;
    const usuarioEncontrado = usuariosRegistrados.find(usuario => usuario.correo === correo && usuario.contraseña === contraseña);        
    if (usuarioEncontrado == true) {         
        loginForm.reset();     
        window.location.href = 'home.html'; 
        }             
    else
    {
        alert("Datos Incorrectos, Ingreselos nuevamente");     
    }}


});});

const logout = document.getElementById("logout");
let usuarioAutenticado = true;
    if (usuarioAutenticado) {
        logout.addEventListener("click", (e)=> {
        usuarioAutenticado = false;
        window.location.href = "index.html";})
    } else {
        window.location.href = "index.html"; 
    }




