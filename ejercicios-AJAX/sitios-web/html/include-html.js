document.addEventListener("DOMContentLoaded",(e)=>{
    const includeHTML = (elem, url)=>{
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange",(e)=>{
        if (xhr.readyState !==4) {
            return;
        }

        if (xhr.status >= 200 && xhr.status <300) {
            elem.outerHTML = xhr.responseText;
        }else{
            let menssaje = xhr.statusText || "Ocurrio un error, verifique peticion por http o https";
            elem.outerHTML = `<div> <p> Error ${xhr.status}: ${menssaje} </p></div>`;
        }
    });

    xhr.open("GET",url);
    xhr.setRequestHeader("Content-Type", "text/html; charset=utf-8");
    xhr.send();
    };

    document
    .querySelectorAll("[data-include]")
    .forEach((elem)=>includeHTML(elem, elem.getAttribute("data-include")));
})