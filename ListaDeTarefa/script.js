//Transformando os elementos do HTML(ID) em variáveis.
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0; //Variável para contar o número de tarefas adicionais.

//Função para adicionar uma nova tarefa.
function addTarefa() {
    let valorInput = input.value;

    //Usando (if - SE) para verificar se o valor de entrada não está vazio ou apenas com espaços em branco
    if (valorInput && valorInput.trim() !== "") {
        contador++; //Adicionando tarefas ao contador.

        let novoItem = "<div class=\"item\" id=\"item-" + contador + "\" onclick=\"marcaTarefa(" + contador + ")\">" +
            "<div class=\"item-icone\">" +
            "<img id=\"icone_" + contador + "\" src=\"circle-outline.svg\">" +
            "</div>" +
            "<div class=\"item-nome\">" +
            valorInput +
            "</div>" +
            "<div class=\"item-botao\">" +
            "<button class=\"delete\" onclick=\"removerTarefa(" + contador + ")\">" +
            "<img src=\"delete.svg\">Deletar</button>" +
            "</div>" +
            "</div>";

        //Adiciona uma nova tarefa ao conteúdo principal.
        main.innerHTML += novoItem;

        //Limpa e foca no campo de entrada.
        input.value = "";
        input.focus();
    }
}

//Função para remover uma tarefa.
function removerTarefa(id) {
    let elementoRemover = document.getElementById('item-' + id);
    if (elementoRemover) {
        elementoRemover.parentNode.removeChild(elementoRemover);
    }
}

//Função para MARCAR / DESMARCAR uma tarefa.
function marcaTarefa(id) {
    var item = document.getElementById('item-' + id);
    item.classList.toggle('clicado');

    var icone = document.getElementById('icone_' + id);

    if (item.classList.contains('clicado')) {
        icone.src = "check-circle.svg";

        //Criando uma variável, para mover a tarefa cncluída para o final da lista.
        var lista = main;
        lista.appendChild(item);

    } else {
        icone.src = "circle-outline.svg";
    }
}

//Adicionar o evento de clique no botão "Adicionar".
btnAdd.addEventListener('click', addTarefa);

//Criando uma segunda opção de adicionar uma tarefa na lista, evento da tecla "ENTER".
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});