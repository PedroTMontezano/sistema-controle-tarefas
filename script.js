const formulario = document.getElementById("form-tarefa");
const campoTarefa = document.getElementById("tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const textoTarefa = campoTarefa.value;

    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = textoTarefa;

    listaTarefas.appendChild(novaTarefa);

    campoTarefa.value = "";
});
