export function ContactForm() {
  const $form = document.createElement("form");
  const $style = document.getElementById("dymanic-styles");
  $form.classList.add("contact-form");

  $style.innerHTML = `
/*VALIDACION DEL FORMULARIO*/
.contact-form{
    --form-ok-color:#4caf50;
    --form-error-color:#f44336;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}

/*tamaño de los cuadro de los formulario y la posicion de los caracteres*/
.contact-form > *{
    padding: 0.5rem;
    margin: 1rem auto;
    display: block;
    width: 100%;
}

.contact-form textarea{
    resize: none;
}

/*tamoño de letra y el tipo de letra*/
.contact-form legend,
.contact-form-response{
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
}

.contact-form input,
.contact-form textarea{
    font-size: 1rem;
    font-family: sans-serif;
}

.contact-form input[type="submit"]{
    width: 50%;
    font-weight: bold;
    cursor: pointer;
}

.contact-form [required]:valid{
    border: thin solid var(--form-ok-color);
}

.contact-form [required]:invalid{
    border: thin solid var(--form-error-color);
}

.contact-form-error{
    margin-top: 1rem;
    font-size: 80%;
    background-color: var(--form-error-color);
    color: #fff;
    transition: all 800ms ease;
}

.contact-form-error.is-active{
    display: flex;
    animation: show-message 1s normal 0s ease-out both;
}

.none {
    display: none;
}

@keyframes show-massage {
    0%{
        visibility: hidden;
        opacity: 0;
    }

    100% {
        visibility: visible;
        opacity: 1;
    }
}
    `;

  $form.innerHTML = `
        <legend>Enviar tus formularios</legend>
          <input type="text" name="name" placeholder="Escribe tu nombre" title="Nombre solo acepta letra y espacios en blanco"
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
          <input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto" 
                pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
          <input type="text" name="subject" placeholder="Asunto a tratar" title="El asunto es requerido" required>
          <textarea name="comments" placeholder="Escribe tu comentario" cols="50" rows="5" 
                title="Tu comentario no debe exceder los 255 caracteres" data-pattern="^.{1,255}$" required></textarea>
          <input type="submit" value="Enviar">
          <div class="contact-form-loader none">
            <img src="app/assets/loader.svg" alt="Cargando">
          </div>
          <div class="contact-form-response none">
            <p>Los dados han sido enviados</p>
          </div>
    `;

    function validacionFormaulario(){
        const d = document;
        const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]");
    
        $inputs.forEach((input)=>{
            const $span = d.createElement("span");
            $span.id = input.name;
            $span.textContent = input.title;
            $span.classList.add("contact-form-error","none");
            input.insertAdjacentElement("afterend",$span);
        });
    
        d.addEventListener("keyup",(e)=>{
            if (e.target.matches(".contact-form [required]")) {
                let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;
    
                if (pattern && $input.value !== "") {
                    let regex = new RegExp(pattern);
                    return !regex.exec($input.value)
                        ? d.getElementById($input.name).classList.add("is-active")
                        : d.getElementById($input.name).classList.remove("is-active");
                }
    
                if (!pattern) {
                    return $input.value === ""
                        ? d.getElementById($input.name).classList.add("is-active")
                        : d.getElementById($input.name).classList.remove("is-active");
                }
            }
        });
    
        d.addEventListener("submit",(e)=>{
            //e.preventDefault();
            alert("Enviar Formularios");
    
            const $loader = d.querySelector(".contact-form-loader");
            const $reponse = d.querySelector(".contact-form-response");
    
            $loader.classList.remove("none");
    
            setTimeout(()=>{
                $loader.classList.add("none");
                $reponse.classList.remove("none");
                $form.reset();
    
                setInterval(()=> $reponse.classList.add("none"),3000);
            },3000)
        })
    }

    setTimeout(()=>validacionFormaulario(), 100)
    

  return $form;
}
