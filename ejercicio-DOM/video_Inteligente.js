const d = document;
const w = window;
export default function smartVideos() {
  const $video = d.querySelectorAll("video[data-smart-video]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      w.addEventListener("visibilitychange", (el) => {
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause();
      });
    });
  };

  const observe = new IntersectionObserver(cb, { threshold: 0.5 });
  $video.forEach((ele) => observe.observe(ele));
}
