const input = document.getElementById("name");
const addTaskButton = document.getElementById("button");
const form = document.querySelector("form");
const taskList = document.querySelector("ul");
const deleteTaskButton = document.getElementById("deleteButton");
const checkbox = document.getElementById("checkbox");
const removeAlert = document.getElementById("removeAlert");

//Função para quando apertar o botao do forms, acontecer o código
form.addEventListener('submit', function(e) {
    e.preventDefault(); //Faz com que a pagina nao seja carregada quando clicado

    const valor = input.value.trim();
    if (valor === "") return alert('Valor Vazio'); //Nao deixar adicionar no input vazio

    const list = document.createElement('li');
    list.classList.add('listItem'); //Adiciona a classe na LI

    list.innerHTML = `
    <input type="checkbox" id="checkbox">
    <p>${valor}</p>
    <button id="deleteButton"><img src="/assets/trash.svg" alt="Trash Icon"></button>`
    
    taskList.appendChild(list); //Colocar a LI dentro da UL

    //Função para excluir a LI criada
    const trash = list.querySelector('#deleteButton')
    trash.addEventListener('click', () => {
        list.remove();
        showMessageRemove();        
    });
});


//Função para aparecer a mensagem de remocao
function showMessageRemove() {
    removeAlert.classList.remove('hidden');

    setTimeout(() => {
        removeAlert.classList.add('hidden');
    }, 3000);
}