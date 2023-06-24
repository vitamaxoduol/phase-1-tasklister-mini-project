document.addEventListener("DOMContentLoaded", () => {
  // your code here
});


// document.addEventListener('DOMContentLoaded',  () => {
//       console.log('After DOM Loaded');
//       console.log(document.querySelector('div'));
//   })
//   console.log('Before DOM Loads');

// document.addEventListener('click', () => {
//   preventDefault();
// })


// const taskButton = document.querySelector('input')
// const input = document.querySelector('input')
// function creatingTodoList() {
//   const ul = document.querySelector('ul');
//   const li = document.createElement('li')
//   const newTodo = documentElementById('new todo description')
//   li.textContent = inputValue;
//   ul.append(li);
//   console.log(newTodo);
// }

// taskButton.addEventListener("click", creatingTodoList);


// or


document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById("create-task-form")//Getting to the form element
  const todoList = document.getElementById("tasks")//getting to the ul element

  todoForm.addEventListener("submit", function(event) { //adding event Listener for form submission
    event.preventDefault();
    let newTask = document.getElementById('new-task-description').value; //creating the task text to the list item
    let listTodo = document.createElement('li');//Creating a list item
    listTodo.textContent = newTask//Adding a new todo task to the listing


    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      todoList.removeChild(listTodo);
    })

    listTodo.appendChild(deleteButton);
    todoList.appendChild(listTodo)//Inserting the listed todo to the task list
    
    document.getElementById("new-task-description").value = "";


  })

})