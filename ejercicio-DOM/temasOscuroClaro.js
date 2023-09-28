const d = document;
const ls = localStorage;
export default function temasOscuro(btn,classDark){
const $themeButton = d.querySelector(btn);
const $selector = d.querySelectorAll("[data-dark]");

let moon="🌙";
let son="☀️"

const lightMode= ()=>{
    $selector.forEach(elem=>elem.classList.remove(classDark));
    $themeButton.textContent =moon;
    ls.setItem("theme","light");
}

const darkMode = ()=>{
    $selector.forEach(elem=>elem.classList.add(classDark));
    $themeButton.textContent =son;
    ls.setItem("theme","dark");
}

d.addEventListener("click",(e)=>{
    if (e.target.matches(btn)) {
        if($themeButton.textContent === moon){
            darkMode();
        }
        else{
            lightMode();
        }
    }
});

d.addEventListener("DOMContentLoaded",(e)=>{
 //Preguntamos si "ls" tiene valor   ///ASIGNAMOS UN VALOR AL "LS"
    if (ls.getItem("theme")===null) ls.setItem("theme","light");

    if(ls.getItem("theme")==="light")lightMode();
    
    if(ls.getItem("theme")==="dark")darkMode();
})
}