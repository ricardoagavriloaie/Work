
import {http} from "./http.js";

// Get Produscts on DOM Load
document.addEventListener("DOMContentLoaded", getProducts);

function getProducts() {
    http
		.get('http://localhost:3000/products')
		.then((data) =>{
            let output = "";
            data.forEach((product) => {
                output += `
        <div class="obiectBox product-box">
            <a href="details.html?id=${product.id}">
               <img src="${product.image}"href="details.html${product.id}" >
               <h3>${product.title} </h3>
               <span>${product.price}<span>$</span></span><br>
               <span href="details.html?id=${product.id}" class="btn brn-primary" id="prod_${product.id}">Detalii</span>
            </a>
         </div>
         `;
            })
            document.getElementById('products').innerHTML = output;
        });
}





