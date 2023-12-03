import { CardComponent } from "./componentes/cards.js";
import { getData,setData,deletedata} from "./localStorage.js";
import { carduser } from "./componentes/carduser.js";

document.addEventListener('DOMContentLoaded', function () {
try {
  const idcategory = document.getElementById("categoria").value;
  let cardHTML = "";
  const container = document.getElementById("productos-container");

  fetch('Datos/data.json')
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



try {
  const container = document.getElementById("productos-container");
  container.addEventListener('click', (e) => {
    const target = e.target;
  
    if (target && target.className.includes('btncard')) {
      
      const id = target.id.split('-')[1];
      const tittle = document.getElementById(`tittle-${id}`).textContent;
      const price = document.getElementById(`price-${id}`).textContent;
      let amount = document.getElementById(`amount-${id}`).value;
      if(amount === ''){
        amount = 1
      }
      const prod = {
        tittle: tittle,
        price: price,
        amount: amount
      };

      const prodtList = getData('ProdList');
      const prodh = getData('History');

      prodtList.push(prod);     
      prodh.push(prod);
        
      setData('ProdList', prodtList);
      setData('History', prodh);

     
    
}})}
  catch (error) {
    console.log(error);
  }
  try{
    const historial = getData('History');
   
    function mostrarProductos() {
      const History = document.getElementById('historial');

      History.innerHTML = '';       
      historial.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');

        const tittlespan = document.createElement('span');
        tittlespan.textContent = producto.tittle + " |";
     
        const pricespan = document.createElement('span');
        pricespan.textContent = producto.price + " |";

        const amountspan = document.createElement('span');
        amountspan.textContent = producto.amount + " |";

        div.appendChild(tittlespan);
        div.appendChild(pricespan);
        div.appendChild(amountspan);

        History.appendChild(div);

      });
    
  }


  mostrarProductos();
}
  catch (error) {
    console.log(error);
}

try{
  const btnremove = document.getElementById("remove");
  btnremove.addEventListener("click", ()=>{
  alert("History Removed");

  deletedata('History');      
  location.reload();  
  })
}
catch (error) {
  console.log(error);
}

try{
  const productos = getData('ProdList');
 

  function mostrarProductos() {
            const carrito = document.getElementById('carrito');
           
            carrito.innerHTML = ''; 

            productos.forEach(producto => {
                const div = document.createElement('div');
                div.classList.add('producto');
   
                const tittlespan = document.createElement('span');
                tittlespan.textContent = producto.tittle + " |";
             
                const pricespan = document.createElement('span');
                pricespan.textContent = producto.price + " |";

                const amountspan = document.createElement('span');
                amountspan.textContent = producto.amount + " |";

                const removebtn = document.createElement('button');
                const Icon = document.createElement('img');
                Icon.src = 'Assets/trash.png'
                Icon.style.width = '20px';
                Icon.style.height = '20px';;              
                removebtn.classList.add('eliminar');
                removebtn.appendChild(Icon);
                removebtn.addEventListener('click', () => eliminarProducto(producto));

                div.appendChild(tittlespan);
                div.appendChild(pricespan);
                div.appendChild(amountspan);
                div.appendChild(removebtn);

                carrito.appendChild(div);
              
            });
         
           
        }

        
        function eliminarProducto(producto) {
            const index = productos.indexOf(producto);
            if (index !== -1) {
                productos.splice(index, 1);
                setData('ProdList', productos);
                mostrarProductos(); 
            }
        }
       

        mostrarProductos();
}
catch (error) {
  console.log(error);
}
});

try{
const btnbuy = document.getElementById("buy");
btnbuy.addEventListener("click" ,() => {
const adress = document.getElementById("adress").value;
const postal = document.getElementById("postal").value;
const phone = document.getElementById("phone").value;
const locations = document.getElementById("location").value;

if ( adress == "" || postal == "" || phone == "" || locations == ""){
  alert("Complete los datos de envio antes de seguir");
}
else{
  const personalizedMessage = `¡Compra realizada!\n
  Direccion: ${adress}\n
  Codigo Postal: ${postal}\n
  Telefono: ${phone}\n
  Localidad: ${locations}`;
  alert(personalizedMessage);
  document.getElementById("adress").value = "";
  document.getElementById("postal").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("location").value = "";
  deletedata('ProdList');    
  location.reload();    
}

    
})
const btncancel = document.getElementById("cancel");
btncancel.addEventListener("click", ()=>{
alert("Compra Cancelada");
document.getElementById("adress").value = "";
document.getElementById("postal").value = "";
document.getElementById("phone").value = "";
document.getElementById("location").value = "";

deletedata('ProdList');      
location.reload();  
})

}catch (error) {
  console.log(error);
};


try{
const getUserdata = (key)=>{
  return JSON.parse(sessionStorage.getItem(key))
}


window.addEventListener('load', ()=>{
  const userinfo = getUserdata('userData')
  console.log(userinfo)
  const datos = document.getElementById("datos");
  const card = carduser(userinfo);
  datos.innerHTML = card;

})}catch (error) {
  console.log(error);
};