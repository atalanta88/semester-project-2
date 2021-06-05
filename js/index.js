import { displayMessage } from "./ui/displayMessage.js";
import { baseUrl } from "./api/baseUrl.js";
import { showFeatured } from "../js/ui/products/showFeatured.js";

const homeUrl = baseUrl + "home";
const pictureUrl = "http://localhost:1337";

async function getHero() {
  try {
    const response = await fetch(homeUrl);
    const json = await response.json();

    const container = document.querySelector(".hero-container");

    container.innerHTML = `
    
   <div class="col image">
   <div class="container">
   <h1>Heroic sunglasses</h1>
   <p class="lead">
   You are the hero of your own story.
   </p>
   </div>

   <img src="${pictureUrl}${json.hero_banner.url}"
    class="img-fluid details"
    alt="Responsive image"/>
    
   </div>
   `;
  } catch (error) {
    displayMessage("error", "Image not loading", ".message-container");
  }
}
getHero();

showFeatured();
