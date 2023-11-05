export const CardComponent = (data) =>{
return`
<div class = "carta">   
<img src=${data.img} alt="imagen.jpeg" width="200" height="200">
      
<h3>
 ${data.tittle}
</h3>
<h6>${data.desc}</h6>
   <h3 id = "price">
       ${data.price}
     </h3>
    <button class = "btncard">
     Add to cart
     <input type="number" min = "1" placeholder="1">
    </button>
</div>`
    
}