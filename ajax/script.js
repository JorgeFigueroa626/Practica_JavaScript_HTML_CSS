///////////////////////////Objeto XMLHttpRequest -- Metodos //////////////////////////////////

(() => {
  //1) CREAMOS UNA INSTANCIA
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  //2) LOS EVEMTOS DE LA INSTANCIAS
  xhr.addEventListener("readystatechange", (e) => {
    //VALIDAMOS LAS 4 EJECUCIONES COMPLETAS, DEL READYSTATE
    if (xhr.readyState !== 4) {
      return;
    }

    ///VALIDAMOS EL ESTADO DE EJECUCION, CON ERROR
    if (xhr.status >= 200 && xhr.status < 300) {
      //lo convertimos a json
      let json = JSON.parse(xhr.responseText);

      json.forEach((elem) => {
        //CREAMOS UN OBJETO HTML, PARA COLOCAR  DATOS DE LAS PETICIONES
        const $li = document.createElement("li");
        $li.innerHTML = `${elem.name} -- ${elem.email} -- ${elem.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  //3) ABRIMOS LA INSTANCIA, GET -> PETICION, Y LA URL A CONSUMIR /////PETICION PUBLICA  (OPC 1)
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  //3) ABRIMOS LA INSTANCIA, GET -> PETICION, /////PETICION LOCAL    (OPC 2)
  //xhr.open("GET","assets/users.json")

  /////Y LO ENVIAMOS
  xhr.send();
})();

///////////////////////////API Fetch -- Metodos//////////////////////////////////

(() => {
  const $fetch = document.getElementById("fetch");
  $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users") ///------>("assets/users.json")
    .then((res) => (res.ok ? res.json() : Promise.reject(res))) ///EVENTOS DE VALIDACION O CONVERSIONES
    .then((json) => {
      ///EVENTOS DE VALIDACION 
      json.forEach((elem) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${elem.name} -- ${elem.email} -- ${elem.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      ///EVENTOS DE ERROR
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    });
})();

///////////////////////////API Fetch + Async-Await -- Metodos //////////////////////////////////
(() => {
  const $fetchAsync = document.getElementById("fetch-async");
  $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"); ///------>("assets/users.json")
      json = await res.json();

      if (!res.ok)
        throw { status: await res.status, statusText: await res.statusText };
      json.forEach((elem) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${elem.name} -- ${elem.email} -- ${elem.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      let message = err.statusText || "Ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    }
  }
  getData();
})();

/////////////////////////// Axios - Libreria //////////////////////////////////
(() => {
  const $axios = document.getElementById("axios");
  $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users") ///------>("assets/users.json")
    .then((res) => {
      let json = res.data;
      json.forEach((elem) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${elem.name} -- ${elem.email} -- ${elem.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      let message = err.response.statusText || "Ocurrio un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    });
})();

/////////////////////////// Axios + Async-Await --- Libreria //////////////////////////////////
(() => {
  const $axiosAsync = document.getElementById("axios-async");
  $fragment = document.createDocumentFragment();

  
  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");  ///------>("assets/users.json")
      json = await res.data;
      json.forEach((elem) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${elem.name} -- ${elem.email} -- ${elem.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
    } catch (err) {
      let message = err.response.statusText || "Ocurrio un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    }
  }
  getData();
})();
