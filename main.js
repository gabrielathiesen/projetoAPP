var rowElement = document.querySelector('#app tr');
console.log(rowElement);
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var linhas = [
    { nome:"Giulia", cor:"amarelo"},
    { nome:"Sophia", cor:"rosa"},
    { nome:"Gabriela", cor:"preta"}
];

/*
function renderTodos(){
rowElement.innerHTML = '';

    for (linha of linhas){
        var linhaElement = document.createElement('');
        var linhaText = document.createTextNode(linha);

        var linkElement = document.createElement('a')

        linkElement.setAttribute('href' , '#');

        var linkText = document.createTextNode (' Excluir')

        linkElement.appendChild(linkText);

         var pos = todos.indexOf(todo);

         linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')' );

        linhaElement.appendChild(linhaText);
        linhaElement.appendChild(linkElement);

        rowElement.appendChild(linhaElement);
    }
}

renderLinhas();


function addTodo(){
    var linhaText = inputElement.value;

    linhas.push(linhaText);
    inputElement.value = '';
    renderLinhas();
}
buttonElement.onclick = addLinha;
function deleteLinha(pos) {
    linhas.splice(pos, 1);
    renderLinhas();
}