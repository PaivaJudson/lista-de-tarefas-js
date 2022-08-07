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
    inputTarefa.value = '';
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}