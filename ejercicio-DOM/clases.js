import {hamburguesaMenu, scrollSpy} from "./panel_hamburguesa.js";
import { reloj, alarma } from "./reloj_alarma.js";
import countdown from "./cuenta_Regresiva.js";
import bottonScrollTop from "./botton_Scroll.js";
import temasOscuro from "./temasOscuroClaro.js";
import {renponsiveMedia, userDeviceInfo} from "./responsive_Dispositivo.js";
import conexionInternet from "./conexion_Internet.js";
//import webCamara from "./detectar_CamaraWeb.js";
import filtroBusquedad from "./filtro_Busquedad.js";
import slider from "./img_slider.js";
import validacionFormaulario from "./validacion_Formulario.js";
import narradorVos from "./narrador.js";
const d = document;

///LLAMAMOS TODAS LAS FUNCIONES QUE SE CREARON EN LAS CLASE DE LOS EJECICIOS, CON SUS PARAMETROS SELECIONADOS
d.addEventListener("DOMContentLoaded", (e) => {
  hamburguesaMenu(".panel-btn", ".panel", ".menu a");
  reloj("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarma("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Dic 24, 2023 16:17:19", "Feliz Navidad");
  bottonScrollTop(".btn-scroll");
  renponsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/embed/6IwUl-4pAzc?si=K0kkNFsu0g4lQsWL">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=K0kkNFsu0g4lQsWL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  renponsiveMedia(
    "maps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/hLGFH7rvNDHEeZr16">Ver mapas</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.505100930565!2d-63.15483648263814!3d-17.814941555366175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e81ca7c01a63%3A0x5c8b0a53a467611b!2sSanta%20Cruz%20de%20la%20Sierra!5e0!3m2!1ses!2sbo!4v1694119311129!5m2!1ses!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  userDeviceInfo("user-divice");
  //webCamara("webcam")
  filtroBusquedad(".card-filter",".card");
  slider();
  scrollSpy();
  validacionFormaulario();
});
//LO LLAMAMOS A FUERA DE LA FUNCION DOM, POR QUE SON DOS FUNCIONES IGUALES DE DOMContentLoad
temasOscuro(".btn-theme-dark", "dark-mode");
conexionInternet();
narradorVos();
