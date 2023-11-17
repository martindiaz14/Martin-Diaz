
export const CardComponent = (data, id) =>{
  return`
  <div class = "carta" id ="${id}">   
  <img src=${data.img} id = "img" alt="imagen.jpeg" width="200" height="200">
       
  <h3 id = "tittle">${data.tittle}</h3>
  <h6 id = "desc">${data.desc}</h6>
  <h3 id = "price">${data.price}</h3>

      <button class = "btncard" id = "agregar"}>
       Add to cart
       <input id = "amount" type="number" min = "1" placeholder="1">
      </button>
  </div>`
}
