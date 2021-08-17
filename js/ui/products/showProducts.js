export function showProducts(productsToShow) {
  const productContainer = document.querySelector(".row");
  productContainer.innerHTML = "";

  productsToShow.forEach(function (product) {
    productContainer.innerHTML += `<div class="col  mb-4">
   <a class="product" href="details.html?id=${product.id}">
    <div class="card h-100">
      <img src="${product.image_url.url}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h3 class="card-title">${product.title}</h3>
        <p class="card-text">${product.description}</p>
        <p class="lead">${product.price} $</p>
        <a href="edit.html?id=${product.id}" class="btn btn-primary">Edit</a>
        <div id="divCheckbox" ${product.featured} style="display: none;">
      </div>
    </div>
   </div>
   </a>`;
  });
}
