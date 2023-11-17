import { CardComponent } from "./componentes/cards.js";
import { getData,setData,deleteData } from "./localStorage.js";


  try {
    const agregar = document.querySelector('#agregar');
    
    agregar.addEventListener("click" ,() => {
        const name = document.querySelector('#tittle').value;
        const price = document.querySelector('#price').value;
        const cantidad = document.querySelector('#amount').value;

        const producto = {
            name : name,
            price : price,
            amount : cantidad
        }
    
       const prod = getData('producto')
       
       prod.push(producto)
    
       setData('producto', prod)
        }
    )} 
    catch(error){
        console.log(error);
    }






try {
  const idcategory = document.getElementById("categoria").value;
  let cardHTML = "";
  const container = document.getElementById("productos-container");

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      container.innerHTML = "";

      let categoryToFilter;

      switch (idcategory) {
        case "1":
          categoryToFilter = "oversize";
          break;
        case "2":
          categoryToFilter = "sleeveles";
          break;
        case "3":
          categoryToFilter = "longsleeve";
          break;
        default:
          categoryToFilter = null;
      }

      data.forEach(producto => {
        if (!categoryToFilter || producto.category === categoryToFilter) {
          producto.productos.forEach((prod, i) => {
            if  (idcategory === "0" && i % 3 === 0) {
              console.log(prod);
              cardHTML = CardComponent(prod, i + 1);
              container.innerHTML += cardHTML;
            }
            else if(idcategory !== "0" ){
              console.log(prod);
              cardHTML = CardComponent(prod, i + 1);
              container.innerHTML += cardHTML;
            }

          });
        }
      });
    });
} catch (error) {
  console.log(error);
}