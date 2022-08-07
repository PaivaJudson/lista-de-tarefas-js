const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector(".tarefas");


btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;

    criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criarBotaoApagar(li);
    limpaInput();
    salvarTarefa();
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criarBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function(e) {
    const elemento = e.target;

    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
        salvarTarefa();
    }

});

function salvarTarefa() {
    const listaLi = tarefas.querySelectorAll('li');
    const listaTarefas = [];
    for (let tarefa of listaLi) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }

    const tarefaJSON = JSON.stringify(listaTarefas);
    console.log(listaTarefas);
    localStorage.setItem('tarefas', tarefaJSON);
}

function addTarefasDoLocalStorage() {

}