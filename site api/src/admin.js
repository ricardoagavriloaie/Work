import {http} from "./http.js";

document.getElementById('add-product').addEventListener('click', addNewProduct);

function addNewProduct() {
	const titleValue = document.getElementById('title').value;
	const priceValue = document.getElementById('price').value;
	const imageValue = document.getElementById('image').value;
	const descriptionValue = document.getElementById('description').value;
    const cantitateValue = document.getElementById('cantitate').value;

	let product = {
		title: titleValue,
		price: priceValue,
		image: imageValue,
		description: descriptionValue,
        cantitate: cantitateValue,
	};

	http
		.post('http://localhost:3000/products', product)
		.then((data) => getProducts());
}


document.addEventListener("DOMContentLoaded", showProducts);
function showProducts() {
    http
		.get('http://localhost:3000/products')
		.then((data) =>{
            let output = "";
            data.forEach((product) => {
                output += `
                <tbody>
                  <tr>
                    <th scope="row" class="">${product.id} </th>
                    <td><img src="${product.image}" class="col-xs"></td>
                    <td><h5>${product.title} </medium></td>
                    <td><span>${product.price}$</span></td>
                    <td><h5>${product.cantitate}</td>
                    <td><button class="btn btn-danger delete" id="${product.id}">delete</button></td>
                  </tr>
                  <tr>
               
            </div>
         </div>
         `;
            })
            document.getElementById('info').innerHTML = output;
 
       });
       document.getElementById('info').addEventListener('click', deleteProduct);

function deleteProduct(e) {
	if (e.target.classList.contains('delete')) {
		const id = e.target.id;
		http
			.delete(`http://localhost:3000/products/${id}`)
			.then((data) => getProducts())
			.catch('Error on delete!');
	}
}
       
}



