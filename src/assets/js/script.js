const button = document.querySelector('.BotãoPrimario');

button.addEventListener('click', () => {
    button.style.transform = 'scale(1.5) translateY(5px)'; // Aumenta a escala e move para baixo
    
    setTimeout(() => {
        button.style.transform = 'scale(1) translateY(0)'; // Retorna à escala original e à posição original
    }, 300);
});


// Função adicionada com a ajuda do chatgpt! Ainda estou estudando a base do javascript, logo, sozinho eu ainda não possuo o conhecimento para tal. Mas com a ajuda da AI, e com a explicação detalhada eu conseguir entender como funciona a interação do JS com o CSS e o corpo do HTML. Em breve adicionarei mais interações do JS nesse projeto, quanto mais eu for aprendendo, mais eu irei aplicando. //


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
// EFEITO DE CARTA GIRANDO NA FOTO E NO FOOTER DO ''INICIO '' DO SITE //

document.querySelectorAll('.icone').forEach((icone) => {
    icone.addEventListener('mouseover', () => {
        icone.style.transform = 'rotateY(180deg)';
    });

    icone.addEventListener('mouseout', () => {
        icone.style.transform = 'rotateY(0deg)';
    });
});

// Animação dos ícones do footer da página ''home.html / SOBRE MIM''
document.querySelectorAll('.iconeimg .icone-link').forEach((icone) => {
    icone.addEventListener('mouseover', () => {
        icone.style.transform = 'rotateY(180deg)';
    });

    icone.addEventListener('mouseout', () => {
        icone.style.transform = 'rotateY(0deg)';
    });
});



// Animação dos ícones do footer da página ''project.html / PROJETOS''
document.querySelectorAll('.container2').forEach((container) => {
    const icone = container.querySelector('.icone-link');

    container.addEventListener('mouseover', () => {
        icone.style.transform = 'rotateY(180deg)';
    });

    container.addEventListener('mouseout', () => {
        icone.style.transform = 'rotateY(0deg)';
    });
});


// MOBILE ------------------------------------------------------------------------//
 // ESTRUTURA PARA ADAPTAR A NAV A MOBILE - PAGINA 1 - INDEX.HTML

 function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const navMenu = document.querySelector('.nav-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    // Verifica se o clique não foi no menu ou no ícone do hamburger
    if (!navMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        navMenu.classList.remove('active'); // Fecha o menu
    }
});


// MOBILE --------------------------------------------------------------------------//
// ESTRUTURA PARA ADAPTAR A NAV A MOBILE - PAGINA 2 - HOME.HTML

// No arquivo script.js
// Para o arquivo index.html
function toggleMenuHome() {
    const navMenu = document.querySelector('.navbar');
    navMenu.classList.toggle('active');
    navMenu.classList.remove('collapsed');
}

document.addEventListener('click', function(event) {
    const navMenu = document.querySelector('.navbar');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    // Verifica se o clique não foi no menu ou no ícone do hamburger
    if (!navMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        navMenu.classList.remove('active'); // Fecha o menu
    }
});


// MOBILE --------------------------------------------------//
// ESTRUTURA PARA ADAPTAR A NAV A MOBILE - PAGINA 3 - PROJECT.HTML

// No arquivo script.js
function toggleMenuProject() { // Mude o nome da função para evitar conflitos
    const navMenu = document.querySelector('.navbar'); // Substitua 'nav-menu' por 'navbar' se você deseja ocultar o menu desktop
    navMenu.classList.toggle('active');
}






