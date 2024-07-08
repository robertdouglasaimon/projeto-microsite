const botaoProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

const botaoProjetosDesign = document.querySelector('.btn-mostrar-projetosd');
const projetosDesignInativos = document.querySelectorAll('.projeto-design:not(.ativo)');


botaoProjetos.addEventListener('click', () => { 
    mostrarMaisProjetos();
    esconderBotao();
});

botaoProjetosDesign.addEventListener('click', () => { 
    mostrarMaisProjetosDesign();
    esconderBotaoDesign();
});



function esconderBotao() {
    botaoProjetos.classList.add("remover");
}
function mostrarMaisProjetos() {
    projetosInativos.forEach(projeto => {
        projeto.classList.add('ativo');
    });
}


function esconderBotaoDesign() {
    botaoProjetosDesign.classList.add("remover");
}
function mostrarMaisProjetosDesign() {
    projetosDesignInativos.forEach(projeto => {
        projeto.classList.add('ativo');
    });
}

