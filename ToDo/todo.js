function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => getTodos(data))
}
function getTodos(todos){
    
    const todoContainer = document.getElementById('tod-container');
    for(const tod of todos){
        console.log(tod);
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo')
    todoDiv.innerHTML = `
    <h2>User ID - ${tod.userId} </h2>
    <h3>Title - ${tod.title} </h3>
    <p>Is Completed - ${tod.completed}</p>
    `;
    
    todoContainer.appendChild(todoDiv)
    }
    
}
loadTodos()