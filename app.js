let button= document.getElementById('add')
let todolist=document.getElementById('todoList')
let input= document.getElementById('input')


let todos=[]
window.onload=()=>{
  todos= JSON.parse(localStorage.getItem('todos'))|| []
  todos.forEach(todo => {
    addtodo(todo)
  });
}
function todoadd()
{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=''

}

function addtodo(todo){
  let para= document.createElement('p');
  para.innerHTML=todo;
  todolist.appendChild(para)
 
  para.addEventListener('click',()=>{
    para.style.textDecoration='line-through'

  })

  para.addEventListener('dblclick',()=>{
    todolist.removeChild(para)
    remove(todo)
  })
}
function remove(todo){
    let index=todos.indexOf(todo)
    if(index>=0)
    todos.splice(index,1)
    localStorage.setItem('todos',JSON.stringify(todos))
}