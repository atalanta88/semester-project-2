import { getUserName } from "../utils/storage.js";
import { logoutButton } from "./logoutButton.js";

export default function createMenu() {
  const container = document.querySelector(".menu-container");

  const { pathname } = document.location;
  console.log(pathname);

  const username = getUserName();

  let authLink = `<a href="/login.html" class="${
    pathname === "/login.html" ? "active" : ""
  }">Login</a>`;

  if (username) {
    authLink = `<button type="button" class="btn btn-danger" id="logout">Logout ${username}</button>
    `;
  }

  container.innerHTML = `<div class="menu">
                          ${authLink}
                          <a href="/" class="${
                            pathname === "/" ? "active" : ""
                          }">Home</a>
                        </div>`;
  logoutButton();
}
