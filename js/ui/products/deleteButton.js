import { baseUrl } from "../../api/baseUrl.js";
import { getToken } from "../../utils/storage.js";

export default function deleteButton(id) {
  const container = document.querySelector(".delete-container");

  container.innerHTML = `<button class="btn btn-primary" id="delete">Delete</button>
  `;

  const button = document.querySelector("button#delete");

  button.onclick = async function () {
    console.log(id);

    const doDelete = confirm("Truly delete this product?");
    console.log(doDelete);

    if (doDelete) {
      const url = baseUrl + "products/" + id;

      const token = getToken();

      const options = {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        location.href = "/";
      } catch (error) {
        console.log(error);
      }
    }
  };
}
