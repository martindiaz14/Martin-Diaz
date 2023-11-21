import { getData,setData,deletedata } from "./localStorage.js";
import { navBarComponent } from "./componentes/navbar.js";
try {
let navcontainer = document.querySelector('header');
const LogOut = (key) =>{
    sessionStorage.removeItem(key)
}
window.addEventListener('load',()=>{
    navcontainer.innerHTML = navBarComponent;
    document.title = "Second Twin";
    document.getElementById(`logout`).addEventListener("click", ()=>{
     LogOut('userData');
     window.location.href ="index.html"
    })
})
} 
catch(error){
    console.log(error);
}

try {
const btnreg = document.getElementById("register");

btnreg.addEventListener("click" ,() => {
    const namereg = document.getElementById("regname").value;
    const lastreg = document.getElementById("reglastname").value;
    const emailreg = document.getElementById("regmail").value;
    const passreg = document.getElementById("regpassword").value;
    const datereg = document.getElementById("regdate").value;
    
    if( namereg == "" || lastreg == "" || emailreg == "" || passreg == "" || datereg == ""){
        alert("complete todos los campos antes de seguir");
    }
    else{
  
    const newUser = {
        name : namereg,
        lastname : lastreg,
        email : emailreg,
        pass : passreg,
        date : datereg
    }

   const users = getData('userData')
   
   users.push(newUser)

   setData('userData', users)
    }
})  

} 
catch(error){
    console.log(error);
}


try {

const formlog = document.getElementById('formlog');

formlog.addEventListener("submit", (e)=>{
    e.preventDefault();
    let usermail = document.getElementById('logmail').value
    let userpass = document.getElementById('logpassword').value   
    fetch('./dataUser.json').then(res => res.json()).then(users => {
    const user = users.find(e => e.email === usermail && e.pass === userpass)
   if(user){
    sessionStorage.setItem('userData', JSON.stringify(user))
    console.log(user);
    window.location.href = 'http://127.0.0.1:5500/home.html';
}
    else{
      alert("Credenciales Incorrectas");
    }
} )
})}
catch (error) {
    console.log(error);
}




