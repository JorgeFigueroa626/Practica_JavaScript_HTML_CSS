export function hamburguesaMenu(panelBtn, panel, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    //MOSTRAR TODAS LAS SECION EN UN PANEL Y TAMBIEN QUITAR (EN MODULO)
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
    //QUITA LA SECION DE UN PANEL, DESPUES DE DAR CLICK EN UNA SECCION
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}

///MOSTRAR EL PANEL ALADO IZQUIERDO, EN MODO ESCRITORIO
const dc = document;
export function scrollSpy() {
  const $sections = dc.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        dc.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        dc.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    threshold: [0.5, 0.75],
  });

  $sections.forEach((elem) => observer.observe(elem));
}
