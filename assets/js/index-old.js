
const userName = document.getElementById("name");
const userMail = document.getElementById("email");
const userPhone = document.getElementById("phone");
const userMessage = document.getElementById("message");

const sendButtom = document.getElementById("button")
const inputRequired = document.querySelectorAll(".required");

 sendButtom.addEventListener("click", (event) =>{

    event.preventDefault();

    validaNome();

    validaEmail();

    validTelefone();

    validaMenssagem();

})



function validaNome() {
    if (userName.value === "" || userName.value === null) {

        userName.style.borderColor = "#F52E2E";
        inputRequired[0].style.opacity = "1";

    } else {

        userName.style.borderColor = "#84e684";
        inputRequired[0].style.opacity = "0";

    }
}

function validaEmail() {
    if (userMail.value === "" || userMail.value === null) {

        userMail.style.borderColor = "#F52E2E";
        inputRequired[1].style.opacity = "1";

    } else {

        userMail.style.borderColor = "#84e684";
        inputRequired[1].style.opacity = "0";

    }
}

function validTelefone() {
    if (userPhone.value === "" || userPhone.value === null) {

        userPhone.style.borderColor = "#F52E2E";
        inputRequired[2].style.opacity = "1";

    } else {

        userPhone.style.borderColor = "#84e684";
        inputRequired[2].style.opacity = "0";

    }
}

function validaMenssagem() {
    if (userMessage.value === "" || userMessage.value === null) {

        userMessage.style.borderColor = "#F52E2E";
        inputRequired[3].style.opacity = "1";

    } else {

        userMessage.style.borderColor = "#84e684";
        inputRequired[3].style.opacity = "0";

    }
}










