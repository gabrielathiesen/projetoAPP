var rowElement = document.querySelector('#app tr');
console.log(rowElement);
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var linhas = [
    { nome:"Giulia", cor:"amarelo"},
    { nome:"Sophia", cor:"rosa"},
    { nome:"Gabriela", cor:"preta"}
];

function renderTodos(){
rowElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a')

        linkElement.setAttribute('href' , '#');

        var linkText = document.createTextNode (' Excluir')

        linkElement.appendChild(linkText);

         var pos = todos.indexOf(todo);

         linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')' );

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        rowElement.appendChild(todoElement);
    }
}

renderTodos();


function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}
buttonElement.onclick = addTodo;
function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
}