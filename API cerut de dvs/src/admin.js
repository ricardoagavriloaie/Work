import {http} from "./http.js";

document.getElementById('add-product').addEventListener('click', addNewProduct);

function addNewProduct() {
	const numarValue = document.getElementById('numar').value;
	const eleviValue = document.getElementById('elevi').value;
	const profesorValue = document.getElementById('profesor').value;
  const mediaValue = document.getElementById('media').value;
  
	let product = {
	  numar: numarValue,
		elevi: eleviValue,
		profesor: profesorValue,
    media: mediaValue,
        
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
            let output = ` <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Clasa</th>
                <th scope="col">Numar Elevi</th>
                <th scope="col">Profesor</th>
                <th scope="col">Media Notelor</th>
              </tr>
            </thead>
            <tbody>`;
            data.forEach((product) => {
                output += `
                <tbody>
                  <tr>
                    <th scope="row" class="">${product.id} </th>
                    <td><h5>${product.numar} </medium></td>
                    <td><h5>${product.elevi}</td>
                    <td><h5 class="prof">${product.profesor}</td>
                    <td><h5 class="prof">${product.media}</td>
                    <td><button class ="apasa btn btn-danger delete" id="${product.id}">delete</button></td>  
                  </tr>
                  <tr>
            </div>
         </div>
         `;
            })
            document.getElementById('info').innerHTML = output;
       });
function update(id){
console.log(id)
}

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



