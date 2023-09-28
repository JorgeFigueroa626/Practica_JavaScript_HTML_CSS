const d = document;
$shows = d.getElementById("shows");
($template = d.getElementById("show-template").content),
  ($fragment = d.createDocumentFragment());

d.addEventListener("keypress", async (e) => {
  if (e.target.matches("#search")) {
    if (e.key === "Enter") {
      try {
        $shows.innerHTML = `<img src="../buscador-api-tv-shows/assets/loader.svg" alt="Cargando..." class="loader" />`;

        let query = e.target.value.toLowerCase();
        let api = `https://api.tvmaze.com/search/shows?q=${query}`;
        res = await fetch(api);
        json = await res.json();

        //console.log(api, res, json);

        if (!res.ok) {
          throw { status: res.status, statusText: res.statusText };
        }

        if (json.length === 0) {
          $shows.innerHTML = `<h2> No existe resultado de busquedad: <mark>${query}</mark></h2>`;
        } else {
          json.forEach((elem) => {
            $template.querySelector("h3").textContent = elem.show.name;
            $template.querySelector("div").innerHTML = elem.show.summary
              ? elem.show.summary
              : "Sin descripcion";
            $template.querySelector("img").src = elem.show.image
              ? elem.show.image.medium
              : "https://static.tvmaze.com/uploads/images/original_untouched/448/1121792.jpg";
            
              $template.querySelector("img").alt = elem.show.name;
              $template.querySelector("img").style.maxWidth = "100%";

            $template.querySelector("a").href = elem.show.url ? elem.show.url:"#";
            $template.querySelector("a").target = elem.show.url ? "_black":"_self";
            $template.querySelector("a").textContent = elem.show.url ? "ver mas...":"";

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
          });

          $shows.innerHTML = "";
          $shows.appendChild($fragment);
        }
      } catch (error) {
        let menssage = error.statusText || "Ocurrio un error";
        $shows.innerHTML = `<p>Error ${error.status}: ${menssage}</p>`;
      }
    }
  }
});
