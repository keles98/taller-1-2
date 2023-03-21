function buscarPokemon(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
            .then(response =>{
                if(response.ok){
                    resolve(response.json());
                }else{
                    reject(new Error("Pokemon no encontrado"));
                }
            }).catch(error => reject(error));
        }, 2000);
        
    });

}

buscarPokemon('pikachu')
.then(data => {
    console.log(data);
    const {species:{name, url}, id, forms:[posicion, posicion2, posicion3]} = data;
    //console.log(forms);
    const { name:nameForm, url:urlForm } = posicion;
    const { name:nameForm2, url:urlForm2 } = posicion2;
    const { name:nameForm3, url:urlForm3 } = posicion3;
    console.log(nameForm);
    //console.log(forms[0]);
}).catch(error => {
    console.log(error);
});