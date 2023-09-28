const d = document;
const $selectPrimary = d.getElementById("select-primary");
const $selectSecondary = d.getElementById("select-secondary");
$selectThrind = d.getElementById("select-third")

function loadStates() {
  fetch("https://api.copomex.com/query/get_estados?token=pruebas")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      let $options = `<option value="">Elige un estado</option>`;
      json.response.estado.forEach(
        (el) => ($options += `<option value="${el}">${el}</option>`)
      );
      $selectPrimary.innerHTML = $options;
    })
    .catch((err) => {
      let messaje = err.statusText || "Ocurrio un error";
      $selectPrimary.nextElementSibling.innerHTML = `Error ${err.status}: ${messaje}`;
    });
}

function loadToawns(state) {
  fetch(
    `https://api.copomex.com/query/get_cp_por_municipio/Aguascalientes?token=${state}`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      let $options = `<option value="">Elige un municipio</option>`;
      json.response.municipios.forEach(
        (el) => ($options += `<option value="${el}">${el}</option>`)
      );
      $selectPrimary.innerHTML = $options;
    })
    .catch((err) => {
      let messaje = err.statusText || "Ocurrio un error";
      $selectSecondary.nextElementSibling.innerHTML = `Error ${err.status}: ${messaje}`;
    });
}

function loadSuburbs(state) {
    fetch(
      `https://api.copomex.com/query/get_cp_por_municipio/Aguascalientes?token=${state}`
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        let $options = `<option value="">Elige un municipio</option>`;
        json.response.municipios.forEach(
          (el) => ($options += `<option value="${el}">${el}</option>`)
        );
        $selectPrimary.innerHTML = $options;
      })
      .catch((err) => {
        let messaje = err.statusText || "Ocurrio un error";
        $selectSecondary.nextElementSibling.innerHTML = `Error ${err.status}: ${messaje}`;
      });
  }

d.addEventListener("DOMContentLoaded", loadStates);

$selectPrimary.addEventListener("change", (e) => loadToawns(e.target.value));
$selectSecondary.addEventListener("change", (e)=>loadSuburbs(e.target.value))
