var estado="apagada"
var licuadora=document.getElementById("batidora")
var sonidoBoton=document.getElementById("sonido-boton")
var sonidoLicuadora=document.getElementById("sonido-licuadora")
function controlar(){
    if(sonidoLicuadora.paused){
        sonidoBoton.play()
        sonidoLicuadora.play()
    }else{
        sonidoBoton.play()
        sonidoLicuadora.pause()
        sonidoLicuadora.currentTime=0;
    }

    if(estado=="apagada"){
        estado="prendida"
        licuadora.classList.add("activa")
        
    } else{
        estado="apagada"
        licuadora.classList.remove("activa")
        
    }

}