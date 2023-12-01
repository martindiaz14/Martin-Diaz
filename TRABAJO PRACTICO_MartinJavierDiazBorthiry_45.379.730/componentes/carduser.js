export const carduser = (data) =>{
    return`
    <div  >  
    <img src="Assets/fotodeperfil.png" id = "img" alt="imagen.jpeg" width="200" height="200">      
    <h4 id = "name">${data.name}</h4>
    <h4 id = "lastname">${data.lastname}</h4>
    <h4 id = "email">${data.email}</h4>
    <h4 id = "date">BIRTHDAY: ${data.date}</h4>
    </div>`
  }