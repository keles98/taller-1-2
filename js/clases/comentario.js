class Comentario {

    constructor(texto, usuario, fecha) {

      this.texto = texto;
      this.usuario = usuario;
      this.fecha = fecha;
    }

    agregar(textoToAdd){
        this.texto += textoToAdd;
    }

    editar(nuevoTexto){
        this.texto = nuevoTexto;
    }

    eliminar(){
        this.texto = "";
    }
}