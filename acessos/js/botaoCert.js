const botaoEscondido = document.querySelector('.button2');
const classe = document.querySelectorAll('.noneVisivel');


function cliqueVer(e) {
    classe.forEach((elemento) => {
        if (elemento.classList.contains('noneVisivel')) {
            elemento.classList.remove('noneVisivel');
            elemento.classList.add('visivel');
            botaoEscondido.innerHTML = 'Ver menos';
        } else {
            elemento.classList.add('noneVisivel');
            elemento.classList.remove('visivel');
            botaoEscondido.innerHTML = 'Ver mais';
        }
    })
}

function maisHabilidades(elemento) {
    elemento.addEventListener('click', cliqueVer)
}


/* typeWriter(fName); */
maisHabilidades(botaoEscondido);