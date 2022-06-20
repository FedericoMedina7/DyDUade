const nombre= document.getElementById("name")
const surname= document.getElementById("apellido")
const email= document.getElementById("email")
const form= document.getElementById("form")
const text= document.getElementById("texto")
const parrafo= document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let regexmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let entrar = false
    if (nombre.value.length <2){
        warnings+= `Nombre invalido <br>`
        entrar = true

    }
    if (surname.value.length <2){
        warnings+= `Apellido invalido <br>`
        entrar = true
    }
    
    if (!regexmail.test(email.value)){
        warnings+= `Ingrese un Email valido <br>`
        entrar = true
    }
    if (text.value.length <5){
        warnings+= `La consulta debe tener más de 5 letras. <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
    else{
        parrafo.innerHTML = "Su consulta fue enviada!"
    }
})