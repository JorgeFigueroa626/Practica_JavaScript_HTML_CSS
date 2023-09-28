const d = document;
$main = d.querySelector("main");

fetch("assets/javascript.md")
.then(res => res.ok ? res.text(): Promise.reject(res))
.then(text =>{
    $main.innerHTML = new showdown.Converter().makeHtml(text)
})
.catch(err => {
    let menssaje = err.status || "Ocurrio un error";
    $main.innerHTML = `Error ${err.status}: ${menssaje}`;
});