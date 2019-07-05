var rowElement = document.querySelector('#app tr');
console.log(rowElement);
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
/*
var linhas = [
    { nome:"Giulia", cor:"amarelo"},
    { nome:"Sophia", cor:"rosa"},
    { nome:"Gabriela", cor:"preta"}
];
*/

function renderTodos(){
rowElement.innerHTML = '';

    for (linha of linhas){
        var linhasElement = document.createElement('th');
        var linhasText = document.createTextNode(linha);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href' , '#');

        var linkText = document.createTextNode (' Excluir');

        linkElement.appendChild(linkText);

         var pos = linhas.indexOf(linha);

         linkElement.setAttribute('onclick', 'deleteTodo'(+ pos +''));

        linhasElement.appendChild (linhasText);
        linhasElement.appendChild(linkElement);

        rowElement.appendChild(linhasElement);
    }
}

renderLinhas();


function addLinha(){
    var linhaText = inputElement.value;

    linhas.push(linhaText);
    inputElement.value = '';
    renderLinhas();
}

buttonElement.onclick = addLinha;
/*
function deleteLinha(pos) {
    linhas.splice(pos, 1);
    renderLinhas();
}
