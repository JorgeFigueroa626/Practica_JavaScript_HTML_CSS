export async function ajax(props) {
  let { url, success } = props;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res))) ///VALIDAR LA RESPUESTA
    .then((json) => success(json)) // EJECUTAR EL CODIGO SI ES EXITOSO
    .catch((err) => {
      //MANIPULAR SI HAY UN ERROR
      let message = err.statusText || "Ocurrio un error al acceder a la API";
      document.getElementById("main").innerHTML = `
        <div class="error">
            <p>Error ${err.status} : ${message}</p>
        </div>
        `;
      document.querySelector(".loader").style.display = "none";
      console.log(err);
    });
}
