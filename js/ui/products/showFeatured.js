import { baseUrl } from "../../api/baseUrl.js";
import { displayMessage } from "../../ui/displayMessage.js";

export async function showFeatured() {
  const container = document.querySelector(".row");
  const productsUrl = baseUrl + "products";

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    console.log(response);

    container.innerHTML = "";

    json.forEach(function (products) {
      if (products.featured === true) {
        container.innerHTML += `<div class="col  mb-4">
          <a class="product" href="details.html?id=${products.id}">
           <div class="card h-100">
             <img src="${products.image_url.url}" class="card-img-top" alt="..." />
             <div class="card-body">
               <h3 class="card-title">${products.title}</h3>
               <p class="card-text">${products.description}</p>
               <p class="lead">${products.price} $</p>
               <a href="edit.html?id=${products.id}" class="btn btn-primary">Edit</a>
             </div>
           </div>
          </div>
          </a>`;
      }
      console.log(products.featured === true);
    });
  } catch (error) {
    console.log(error);
    displayMessage("error", "Products not available", ".row");
  }
}
