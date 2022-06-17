const dados = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

dados.onsubmit = function (adicionar) {
	adicionar.preventDefault();
	const pegarDados = document.getElementById('task-input');
    if(pegarDados.value != ""){
        addTask(pegarDados.value);
    }
	
	dados.reset();
};

function addTask(conteudo) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(conteudo);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', conteudo);
	newTask.setAttribute('id', conteudo);

	taskLabel.setAttribute('for', conteudo);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}

