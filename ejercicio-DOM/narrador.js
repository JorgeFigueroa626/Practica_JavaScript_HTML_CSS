const d = document;
const w = window;

export default function narradorVos() {
  const $speectSelect = d.getElementById("speech-select");
   const $speectTextarea = d.getElementById("speech-text");
   const $speectBtn = d.getElementById("speech-btn");
  const speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  //OPTIENE TODOS LOS TIPOS DE IDIOMAS
  d.addEventListener("DOMContentLoaded", (e) => {
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = w.speechSynthesis.getVoices();

      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} ${voice.lang}`;

        $speectSelect.appendChild($option);
      });
    });
  });

  ///CAPTURA EL IDIOMA SELECIONADO
  d.addEventListener("change",(e)=>{
    if (e.target === $speectSelect) {
        speechMessage.voice = voices.find(
            (voice)=>voice.name === e.target.value
        );
    }
  });

  //LEE EL PARAFO, CON EL IDIOMA SELECIONADO
  d.addEventListener("click",(e)=>{
    if (e.target === $speectBtn) {
        speechMessage.text = $speectTextarea.value;
        w.speechSynthesis.speak(speechMessage);
    }
  });
}
