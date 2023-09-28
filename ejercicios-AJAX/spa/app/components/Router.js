import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContacrForm.js";

export async function Router() {
  const d = document;
  const w = window;
  const $main = d.getElementById("main");

  let { hash } = location;
  console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      success: (posts) => {
        console.log(posts);
        let html = "";
        posts.forEach((post) => (html += PostCard(post)));
        $main.innerHTML = html;
      },
    });
    //$main.innerHTML = "<h2>Seccion del Home</h2>"
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");

    if (!query) {
      d.querySelector(".loader").style.display = "none";
      return false;
    }

    await ajax({
      url: `${api.SEARCH}/${query}`,
      success: (search) => {
        let html = "";
        if (search.length === 0) {
          html = `
          <p class="error"> 
          No se encontro resultado de buequedad de <mark>${query}</mark>
          </p>
          `;
        } else {
          search.forEach((post) => (html += SearchCard(post)));
        }
        $main.innerHTML = html;
      },
    });
  } else if (hash === "#/contacto") {
    $main.appendChild(ContactForm());
  } else {
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      success: (post) => {
        $main.innerHTML = Post(post);
      },
    });
  }
  d.querySelector(".loader").style.display = "none";
}
