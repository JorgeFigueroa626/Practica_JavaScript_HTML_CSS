const d = document;
const w = window;

export default function bottonScrollTop(btn){
const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll",(e)=>{
        let scrolTop = w.scrollY || d.documentElement.scrollTop;

        if (scrolTop > 600) {
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }
        //console.log(w.scrollY,d.documentElement.scrollTop);
    });

    d.addEventListener("click",(e)=>{
        if (e.target.matches(btn)) {
            w.scrollTo(
                {behavio:"smooth",
                top:0}
            )
        }
    })
}