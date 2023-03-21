const formulario = document.getElementById('formulario')

// Se llama la funcion de validacion
formulario.addEventListener("submit", validarFormulario);


//funcion validar el formulario al dar submit
function validarFormulario(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value
    const texto = document.getElementById("texto").value

    if(usuario == '' || texto == ""){
        mostrarAlerta('No dejes ningun campo vacio', 'error');
    }
    else{
        let comentario = new Comentario(texto, usuario, new Date());
        console.log(comentario);
        mostrarAlerta('Datos correctos', 'exito');
    }
}

//Mostrar la alerta cuando agregamos datos incorrectos o vacíos
function mostrarAlerta(mensaje, tipo) {
    const alerta = document.createElement('div');
    alerta.className = `alerta ${tipo}`
    alerta.textContent = mensaje

    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 2000)
}