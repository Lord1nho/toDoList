
function addTarefa() {

    let inputElement = document.getElementById('input-box');
    let tarefa = inputElement.value;
    if (inputElement.value == '') {
        alert('ERRO: Digite a descrição da tarefa');
    } else {
  // Cria um novo elemento <li>
  let novoItem = document.createElement('li');
  novoItem.textContent = tarefa;
  novoItem.addEventListener('click', markTask)

  // Adiciona o novo <li> à lista
  let lista = document.getElementById('list_tasks');
  lista.appendChild(novoItem);
    }
    document.getElementById('input-box').value = '';
    saveData();
}

function markTask(event) {
    event.target.classList.toggle('checked')
}

function refreshList(){
    let lista = document.getElementById('list_tasks');
    let tarefa = lista.getElementsByTagName('li')
    let tarefasArray = Array.from(tarefa);
    tarefasArray.forEach (tarefa => {
        if (tarefa.classList.contains('checked')){
            lista.removeChild(tarefa);
        }
    })
    saveData();
}

function clearList() {
    let lista = document.getElementById('list_tasks');
    let tarefa = lista.getElementsByTagName('li')
    let tarefasArray = Array.from(tarefa);
    tarefasArray.forEach (tarefa => {
            lista.removeChild(tarefa);
    })
    saveData();
}

function saveData() {
    localStorage.setItem("data", list_tasks.innerHTML);
}

function showList(){
    list_tasks.innerHTML = localStorage.getItem("data");
    let tarefasArray = document.querySelectorAll('#list_tasks li');
    tarefasArray.forEach(tarefa => {
        tarefa.addEventListener('click', markTask);
    });
}

showList();