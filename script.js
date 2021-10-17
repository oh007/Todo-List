document.addEventListener("DOMContentLoaded", function(){
    const addTodoButton = document.getElementById("add-todo")

    addTodoButton.addEventListener("click", addTodo)
}
)


function addTodo(){
  const todoTextInput = document.getElementById("todo-text")
   const todoText = todoTextInput.value
   todoTextInput.value= ""

   console.log(todoText)

   if(todoText){ 
    const todoItem= document.createElement("li")

    todoItem.innerText= todoText
    todoItem.addEventListener("click" , onClickTodoItem)

    const todoList = document.getElementById("todo-list")

    todoList.append(todoItem)
   }
}

function onClickTodoItem(){
   this.classList.toggle("todo-done")

}