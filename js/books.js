// Funcion de consulta de API
function consultaLibro(keyToSearch){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://www.googleapis.com/books/v1/volumes?q=" + keyToSearch)
            .then(response => {
                if(response.ok){
                    resolve(response.json());
                }else{
                    reject(new Error("Error en consulta"));
                }
            }).catch(error => reject(error));
        }, 2000);
    });
}

// Lectura de info consultada en API
function bookToSearch() {
    const keywordToSearch = document.getElementById("keyToSearch").value;
    consultaLibro(keywordToSearch)
    .then(data => {
        console.log(data);
        createTable(data);
    }).catch(error => {
        console.log(error);
    });
}


// Funcion para crear una tabla
function createTable(data){
    // Limpiamos la tabla
    document.getElementById("tabla").innerHTML = "";
    // Obtener la referencia del elemento body
    let siteTable = document.getElementById("tabla");
    let tabla   = document.createElement("table");

    // Se arma el encabezado de la tabla
    let tblHead = document.createElement("thead");
    let filaHead = document.createElement("tr");
    let titulos = ["Titulo", "Descripción", "Autor", "Categoria", "# páginas", "Calificación"];
    for(titulo of titulos){
        let celda = document.createElement("th");
        celda.textContent = titulo;
        filaHead.appendChild(celda);
    }
    tblHead.appendChild(filaHead);
    tabla.appendChild(tblHead);

    let tblBody = document.createElement("tbody");

    let books =  data.items;
    let columnas = ["title", "description", "authors", "categories", "pageCount", "averageRating"];

    // Crea las celdas
    for (book in data.items) {
        var fila = document.createElement("tr");

        for(columna of columnas){
            let celda = document.createElement("td");
            if(books[book].volumeInfo[columna]){
                var textoCelda = document.createTextNode(books[book].volumeInfo[columna]);
            }
            else{
                var textoCelda = document.createTextNode("-");
            }
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
        }

        // agrega la fila al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(fila);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    siteTable.appendChild(tabla);
}
