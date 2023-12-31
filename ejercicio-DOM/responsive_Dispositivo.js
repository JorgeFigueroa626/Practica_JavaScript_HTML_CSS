const d = document;
const w = window;

export function renponsiveMedia(id, mq, mobilContent, desktopContent) {
  //OBTENEMOS EL PARAMETRO DEL ID, DE LA CLASE
  let breakpoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobilContent;
    }
  };

  breakpoint.addListener(responsive);
  responsive(breakpoint);
}

////REDIRECCIONAR AL TIPO DE DISPOSITIVO (USERAGENT)
const dc = document;
const n = navigator;
const ua = n.userAgent;
export function userDeviceInfo(id) {
  const $id = dc.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        );
      },
    };

  $id.innerHTML = `
    <ul>
        <li>User Agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${
          isMobile.any() ? isMobile.any() : isDesktop.any()
        }</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
    `;

  ///REDIRECIONES, DEACUERDO AL DISPOSITIVO QUE ESTA NAVEGANDO
  // if (isMobile.android()) {
  //   window.location.href = "https://jonmircha.com";
  // }
}
