//Haz tú validación en javascript acá
function $ (elem) {
    return document.querySelector(elem)
}


window.addEventListener('load', function () {
    
    const $name = $("#name")
    const $errorName = $("#errorName")
    const $email = $("#email")
    const $errorEmail = $("#errorEmail")
    const $affair = $("#affair")
    const $errorAffair = $("#errorAffair")
    const $message = $("#message")
    const $errorMessage = $("#errorMessage")
    const $submitErrors = $('#submitErrors')
    const $buttonSubmit = $("#btnSubmit")
    const $form = $("#form")

    let validationErrors = false;
    
    
    $name.addEventListener('blur', function(){
        switch (true) {
            case !$name.value.trim():
                $errorName.innerText = "Debe ingresar un nombre"
                validationErrors = true
                break;
            case !/^[a-z]+$/i.test($name.value):
                $errorName.innerText = "No es un nombre valido"
                validationErrors = true
                break;
            default:
                $errorName.innerText = ""
                validationErrors = false
                break;
        }
    })

    $email.addEventListener('blur', function(){
        switch (true) {
            case !$email.value.trim():
                $errorEmail.innerText = "Debe ingresar un email"
                validationErrors = true
                break;
            case !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test($email.value):
                $errorEmail.innerText = "No es un email valido"
                validationErrors = true
                break;
            default:
                $errorEmail.innerText = ""
                validationErrors = false
                break;
        }
    })

    $affair.addEventListener('blur', function(){
        switch (true) {
            case !$affair.value.trim():
                $errorAffair.innerText = "Debe ingresar un asunto"
                validationErrors = true
                break;
            case !/^[a-z]+$/i.test($affair.value):
                $errorAffair.innerText = "No es un asunto valido"
                validationErrors = true
                break;
            default:
                $errorAffair.innerText = ""
                validationErrors = false
                break;
        }
    })

    $message.addEventListener('blur', function(){
        switch (true) {
            case !$message.value.trim():
                $errorMessage.innerText = "Debe ingresar un mensaje"
                validationErrors = true
                break;
            case !/^[a-zA-Z\sñáéíóúü:=%&$·"!¿/[ª!?'¡].{10,1000}$/.test($message.value):
                $errorMessage.innerText = "No es un mensaje valido"
                validationErrors = true
                break;
            default:
                $errorMessage.innerText = ""
                validationErrors = false
                break;
        }
    })



    $form.addEventListener('submit', function(e){
        let error = false;

        e.preventDefault();

        let elementsForm = this.elements;


        for (let index = 0; index < elementsForm.length - 1; index++){
            /* console.log(elementsForm[index].value) */
            if(elementsForm[index].value == ""){
                elementsForm[index].classList.add('text-errors')
                elementsForm[index].style.backgroundColor = 'rgba(255, 0, 0, 0.2)'
                $submitErrors.style.color = 'red'
                $submitErrors.innerHTML = 'Los campos señalados son obligatorios'
                error = true;
            }
        }
        /* console.log("error submit",error)
        console.log("error de validaciones",validationErrors) */

        if(!error && !validationErrors) {
            console.log(e)
            $form.submit()
        }
    })
})