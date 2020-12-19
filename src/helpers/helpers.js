export function mostrarNotificacion(setter){
    setter(true);
    setTimeout(()=>{
        setter(false)
    },2000 )
}
export function verificarVictoria(correcto, error, palabra){
    let estado = 'gano';

    //Verificar si gano
    //console.log(correcto, error)
    palabra.split('').forEach(letter => {
        //console.log(letter)
        if(!correcto.includes(letter)){
            estado='';
        }
    });

    //Verificar si perdio
    if(error.length === 6) estado = 'perdio';

    return estado;
}