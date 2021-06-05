import { showProducts } from "./showProducts.js";

export function searchFilterProducts(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (product) {
      if (product.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    showProducts(filteredProducts);
  };
}
