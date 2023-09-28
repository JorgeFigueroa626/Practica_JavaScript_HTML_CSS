
import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { InfinitScroll } from "./helpers/infinite_scroll.js";

export function App() {
    const d = document;
    const $root = d.getElementById("root");

    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router();
    InfinitScroll();
}
/*
ajax({
    url: api.CATEGORIES,
    success:(cat)=>{
        console.log(cat)
    }
})
*/
