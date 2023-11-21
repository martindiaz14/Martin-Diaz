export const CardComponent = (data, id) =>{
  return`
  <div class = "carta" id ="${id}">   
  <img src=${data.img} id = "img" alt="imagen.jpeg" width="200" height="200">
       
  <h3 id = "tittle-${id}">${data.tittle}</h3>
  <h6 id = "desc">${data.desc}</h6>
  <h3 id = "price-${id}">${data.price}</h3>

      <button class = "btncard" id = "agregar-${id}"}>
       Add to cart
       <input id = "amount-${id}" type="number" min = "1" placeholder="1">
      </button>
  </div>`
}