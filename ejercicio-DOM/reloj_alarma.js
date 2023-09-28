const d = document;
export function reloj(clock, btnPlay, btnStop) {
  let clockTempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHors = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHors}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarma(sound, btnPrint, btnOff) {
  let alarmTempo;
  const $alarma = d.createElement("audio");
  $alarma.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPrint)) {
      alarmTempo = setTimeout(() => {
        $alarma.play();
      }, 2000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnOff)) {
      clearTimeout(alarmTempo);
      $alarma.pause();
      $alarma.currentTime = 0;
      d.querySelector(btnPrint).disabled = false;
    }
  });
}
