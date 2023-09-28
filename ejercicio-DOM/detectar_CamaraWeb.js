const d = document;
const n = navigator;


export default function webCamara(id) {
  const $video = d.getElementById(id);
  if (n.mediaDevices.getDisplayMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        //console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p>Sucedio el siguiente error!: <mark> ${err}</mark> </p>`
        );
        //console.log(`Sucedio el siguiente error!: ${err}`);
      });
  }
}

