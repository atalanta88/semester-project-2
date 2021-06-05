import { baseUrl } from "../../api/baseUrl.js";
import { displayMessage } from "../../ui/displayMessage.js";

export async function showFeatured() {
  const container = document.querySelector(".row");
  const productsUrl = baseUrl + "products";

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";

    json.forEach(function (product) {
      if (product.featured === true) {
        container.innerHTML += `<div class="col  mb-4">
          <a class="product" href="details.html?id=${product.id}">
           <div class="card h-100">
             <img src="${product.image_url}" class="card-img-top" alt="..." />
             <div class="card-body">
               <h3 class="card-title">${product.title}</h3>
               <p class="card-text">${product.description}</p>
               <p class="lead">${product.price} $</p>
               <a href="edit.html?id=${product.id}" class="btn btn-primary">Edit</a>
             </div>
           </div>
          </div>
          </a>`;
      }
      console.log(product.featured === true);
    });
  } catch (error) {
    console.log(error);
    displayMessage("error", "Products not available", ".row");
  }
}
