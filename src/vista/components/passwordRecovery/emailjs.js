import PapuEnviador from "@emailjs/browser";

function enviarCorreo(name, email, code){
    PapuEnviador.send(
        "service_etvjat7",
        "template_e5hf539",
        {
            name: name,
            email: email,
            code: code
        },
        "s6Pp_DXGCvwxEFJG_"
    ).then(() => {
        alert("Hemos enviado el código a tu correo")
    }).catch((err) => {
        alert("¡Ups!. A ocurrido un error")
        console.log("Error: " + err)
    })
}

export default enviarCorreo;