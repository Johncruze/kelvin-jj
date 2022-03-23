function seletor(params) {
    return document.querySelector(params)
}
function creator(params) {
    return document.createElement(params)
}
const todoInput = seletor('.todo-input')
const todoButton = seletor('.todo-button')
const todoList = seletor('.todo-list')
const filterOption = seletor('.filter-todo')


todoList.addEventListener('click', deleteCheck)

todoButton.addEventListener('click', function (event) {
     event.preventDefault();
  
    //create a Dom element
    todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    newTodo = document.createElement('li')
    newTodo.innerText=todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    
    //check mark btn
    completedBtn = document.createElement('button')
    completedBtn.innerHTML='<i>&check;</i>'
    completedBtn.classList.add('complete-btn')
    todoDiv.appendChild(completedBtn)

      //check trash btn
      trashBtn = document.createElement('button')
      trashBtn.innerHTML='<i>&times;</i>'
      trashBtn.classList.add('trash-btn')
      todoDiv.appendChild(trashBtn)

      todoList.appendChild(todoDiv)
      todoInput.value=""
})

function deleteCheck(e){
    item = e.target
    if (item.classList[0]==="trash-btn") {
        const todo = item.parentElement;
        todo.classList.add('fall')
       todo.addEventListener('transitionend', function(params) {
           todo.remove() 
        })
        
    }

    if (item.classList[0]==="complete-btn") {
       const todo = item.parentElement;
       todo.classList.toggle('completed')
   }
 }