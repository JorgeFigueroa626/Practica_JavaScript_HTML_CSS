const d = document;
export default function countdown(id, limitDate, finalDate) {
  const $countdown = d.getElementById(id);
  const countdownDate = new Date(limitDate).getTime(); //OBTIENE FECHA QIE ASIGNAMOS CON EL PARAMETRO

  let countdownTempo = setTimeout(() => {
    let now = new Date().getTime();  //nueva  fecha
    let limitTime = countdownDate - now,
    days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
    hours =("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60))).slice(-2),
    minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60))/ (1000 * 60 ))).slice(-2),
    seconds =("0" + Math.floor((limitTime % (1000 * 60))/ (1000))).slice(-2);

    $countdown.innerHTML = `<h3>Falta ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos </h3>`;
    //console.log(countdownDate, now, limitTime);
  }, 1000);
}
