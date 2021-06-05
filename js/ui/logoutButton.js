import { clearStorage } from "../utils/storage.js";

export function logoutButton() {
  const button = document.querySelector("#logout");
  if (button) {
    button.onclick = function () {
      const doLogout = confirm("Logout?");

      if (doLogout) {
        clearStorage();
        location.href = "/";
      }
    };
  }
}
