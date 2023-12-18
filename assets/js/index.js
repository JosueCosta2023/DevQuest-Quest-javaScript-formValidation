const campos = document.querySelectorAll(".user-input");
const botaoEnviar = document.querySelector(".send");

botaoEnviar.addEventListener("click", (e) =>{
    e.preventDefault();

    campos.forEach((input)=>{

        if(input.value) {
            input.classList.add('preenchido')
            input.nextElementSibling.classList.remove('required')
        } else{
            input.classList.remove('preenchido')
            input.classList.add('vazio')
            input.nextElementSibling.classList.add('required')
        }
    })
})