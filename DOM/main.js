function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');



for(let contador = 0; contador < listaDeTeclas.length; contador ++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador)
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function (){
        playSonido(idAudio);
    };
    tecla.onkeydown = function(evento){
        
        if(evento.code === 'Space' || evento.code === 'Enter' ){
            tecla.classList.add('activa');
        }
        console.log(evento.code === 'Space' || evento.code === 'Enter')
    }
    tecla.onkeyup= function(){
        tecla.classList.remove('activa');
    }

}








//document.querySelector('.tecla_pom').onclick = playSonidoPom;


// function playSonidoClap() {
//     document.querySelector('#sonido_tecla_clap').play()
// }

// document.querySelector('.tecla_clap').onclick = playSonidoClap;

