const button = document.querySelector('.BotãoPrimario');

button.addEventListener('click', () => {
    button.style.transform = 'scale(1.5) translateY(5px)'; // Aumenta a escala e move para baixo
    
    setTimeout(() => {
        button.style.transform = 'scale(1) translateY(0)'; // Retorna à escala original e à posição original
    }, 300);
});


// Função adicionada com a ajuda do chatgrpt! Ainda estou estudando a base do javascript, logo, sozinho eu ainda não possuo o conhecimento para tal. Mas com a ajuda da AI, e com a explicação detalhada eu conseguir entender como funciona a interação do JS com o CSS e o corpo do HTML. Em breve adicionarei mais interações do JS nesse projeto, quanto mais eu for aprendendo, mais eu irei aplicando. //


// FAZENDO EFEITO DE ROTAÇÃO DA IMAGEM COM A AJUDA DO CHAT GPT! //

const fotoPerfil = document.querySelector('.MinhaFotodePerfil');

fotoPerfil.addEventListener('mouseenter', () => {
    fotoPerfil.classList.add('girar');
});

fotoPerfil.addEventListener('mouseleave', () => {
    fotoPerfil.classList.remove('girar');
});

console.log


// APLICANDO O EFEITO DE ROTAÇÃO DE IMAGEM NO ICONE COM A AJUDA DO CHAT GPT! //

document.querySelectorAll('.icone').forEach((icone) => {
    icone.addEventListener('mouseover', () => {
        icone.style.transform = 'rotateY(180deg)';
    });

    icone.addEventListener('mouseout', () => {
        icone.style.transform = 'rotateY(0deg)';
    });
});






