import {http} from "./http.js";

document.addEventListener("DOMContentLoaded", getProducts);

function getProducts() {
    http
   
		.get('http://localhost:3000/products')
		.then((data) =>{
            let output = `<table class="table">
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
                
                <tr>
                <th scope="row">${product.id}</th>
                 <td>${product.numar}</td>
                <td>${product.profesor}</td>
                 <td>${product.elevi}</td>
                 <td>${product.media}</td>
               </tr>`;
        });
              
            document.getElementById('table').innerHTML = output;
            document.getElementById('cap').in
        });
}





