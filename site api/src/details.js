import {http} from "./http.js";


document.addEventListener("DOMContentLoaded", showProducts);
function showProducts() {
    http
		.get('http://localhost:3000/products')
		.then((data) =>{
			
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product_id = urlParams.get('id')
console.log(product_id);
console.log(queryString);


var item = data.find(item => item.id == product_id );

var title = document.getElementById('product_title');
title.innerHTML = item.title;
var price = document.getElementById('product_price');
price.innerHTML = item.price+'$ USD';
var image = document.getElementById('product_image');
image.src = item.image;
var description = document.getElementById('product_desc');
description.innerHTML = item.description;
var stock = document.getElementById('product_stoc');
stock.innerHTML = item.cantitate;

})
}


				