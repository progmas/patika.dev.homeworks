let new_task = document.querySelector('#task').onkeyup = (event) => {
  if (event.keyCode === 13 ){
    event.preventDefault();
    newElement();
  }
}

let todos = window.localStorage.getItem('todos');
if (todos == null){
  todos = JSON.stringify([
    {todo: '3 Litre Su İç', done: false},
    {todo: 'Ödevleri Yap', done: false},
    {todo: 'En Az 3 Saat Kodlama Yap', done: false},
    {todo: 'Yemek Yap', done: false},
    {todo: '50 Sayfa Kitap Oku', done: false},
    ]);
  window.localStorage.setItem('todos', todos);
}
todos = JSON.parse(todos);

let list = document.querySelector('#list');

function fillList(){
  list.innerHTML = "";
  todos.forEach(function(x){
    addTodo(x, false);
  });
}
fillList();

function newElement(){
  let new_task = document.querySelector('#task').value;
  if (new_task.length == 0)
  {
    $('#liveToastError').toast('show');
    return false;
  }
  todos.push({todo: new_task, done: false});
  window.localStorage.setItem('todos', JSON.stringify(todos));
  addTodo({todo: new_task, done: false});
}

function addTodo(todo, init = true){
  const li = document.createElement('li');  
  
  const liTodo = document.createElement('div');  
  liTodo.innerHTML = todo.todo;
  liTodo.onclick = () => doTodo(todo.todo);

  const liDelete = document.createElement('span');  
  liDelete.innerHTML = 'Sil';
  liDelete.classList.add('close');
  liDelete.onclick = () => deleteTodo(todo.todo);

  li.append(liTodo);
  if (todo.done){
    li.classList.add('checked')
  }
  li.append(liDelete);
  list.append(li);
  if (init){
    $('#liveToastAdd').toast('show');
  }
}

function deleteTodo(todo){
  let index = todos.findIndex(function(x){
    return x.todo == todo
  });
  if (index > -1){
    if (confirm('silinsin mi?')){
      todos = todos.filter(function(x){
        return x.todo != todo;
      });
      fillList();
      window.localStorage.setItem('todos', JSON.stringify(todos));
    }
  }
}

function doTodo(todo){
  let index = todos.findIndex(function(x){
    return x.todo == todo
  });
  if (index > -1) {
    listItems = document.querySelectorAll("#list li")          
    listItems[index].classList.toggle('checked')
    if (todos[index].done){
      todos[index].done = false;  
    }
    else
    {
      todos[index].done = true;
    }
    
    window.localStorage.setItem('todos', JSON.stringify(todos));
    fillList();
  }
}