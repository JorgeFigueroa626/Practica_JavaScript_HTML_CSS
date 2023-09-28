const d = document;
w = window;
$site = d.getElementById("site");
$posts = d.getElementById("posts");
$loader = d.querySelector(".loader");
$template = d.getElementById("post-template").content;
$fragment = d.createDocumentFragment();
DOMAIN = `https://malvestida.com`;
SITE = `${DOMAIN}/wp-json`;
API_WP = `${SITE}/wp/v2`;
POSTS = `${API_WP}/posts?_embed`;
PAGES = `${API_WP}/pages`;
CATEGORIES = `${API_WP}/categories`;

let page = 1;
perPage=5;

function getSiteData() {
  fetch(SITE)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      //console.info(json.namespaces[0]);
      $site.innerHTML = `
        <h3>Sitio Web</h3>
        <h2><a href="${json.url}" target="_blank">${json.name}</a></h2>
        <p>${json.description}</p>
        <p>${json.timezone_string}</p>
      `;
    })
    .catch((err) => {
      let mensaje = err.statusText || "Ocurrio un error";
      $site.innerHTML = `<p>${err.status}: ${mensaje}</p>`;
    });
}

function getPostsData() {
  $loader.style.display = "block";

  fetch(`${POSTS}&page=${page}&per_page=${perPage}`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);


        json.forEach(element => {

            let categories ="";
                tags = "";

                element._embedded["wp:term"][0].forEach(element => categories += `<li>${element.name}</li>`);
                element._embedded["wp:term"][1].forEach(element => tags += `<li>${element.name}</li>`);

            $template.querySelector(".post-image").src = element._embedded["wp:featuredmedia"][0].source_url;
            $template.querySelector(".post-image").alt = element.title.rendered;
            $template.querySelector(".post-title").innerHTML = element.title.rendered;
            // $template.querySelector(".post-author").innerHTML = `
            // <img src="${element._embedded.author[0].avatar_urls["48"]}" alt="${element._embedded.author[0].name}"/>
            // <figcaption>${element._embedded.author[0].name}</figcaption>
            // `;
            $template.querySelector(".post-date").innerHTML = new Date(element.date).toLocaleDateString();
            $template.querySelector(".post-link").href = element.link;
            $template.querySelector(".post-excerpt").innerHTML = element.excerpt.rendered.replace("[&hellip;]","...");
            $template.querySelector(".post-categories").innerHTML = `
            <p>Categorias:</p>
            <ul>${categories}</ul>
            `;
            $template.querySelector(".post-tags").innerHTML = `
            <p>Etiquetas:</p>
            <ul>${tags}</ul>
            `;
            $template.querySelector(".post-content > article").innerHTML = element.content.rendered;


            let $clone = d.importNode($template,true);
            $fragment.appendChild($clone);
        });
        $posts.appendChild($fragment);
      $loader.style.display = "none";
    })
    .catch((err) => {
      let menssage = err.statusText || "Ocurrio un error";
      $posts.innerHTML = `<p>${err.status}: ${menssage}</p>`;
      $loader.style.display = "none";
    });
}

d.addEventListener("DOMContentLoaded", (e) => {
  getSiteData();
  getPostsData();
});

w.addEventListener("scroll", e =>{

    const {scrollTop, clientHeight, scrollHeight} = d.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
        console.log("Cargar mas post");
        page++;
        getPostsData();
    }
})