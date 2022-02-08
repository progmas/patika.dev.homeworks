let todos = ['3 Litre Su İç','Ödevleri Yap','En Az 3 Saat Kodlama Yap','Yemek Yap','50 Sayfa Kitap Oku'];
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
          addTodo(new_task);
        }
        function addTodo(todo, init = true){
          const li = document.createElement('li');  
          
          const liTodo = document.createElement('div');  
          liTodo.innerHTML = todo;
          liTodo.onclick = () => doTodo(todo);

          const liDelete = document.createElement('span');  
          liDelete.innerHTML = 'Sil';
          liDelete.classList.add('close');
          liDelete.onclick = () => deleteTodo(todo);

          li.append(liTodo);
          li.append(liDelete);
          list.append(li);
          if (init){
            $('#liveToastAdd').toast('show');
          }
        }

        function deleteTodo(todo){
          let index = todos.indexOf(todo);
          if (index > -1){
            if (confirm('silinsin mi?')){
              todos = todos.filter(function(x){
                return x != todo;
              });
              fillList();
            }
          }
        }

        function doTodo(todo){
          let index = todos.indexOf(todo);
          if (index > -1) {
            listItems = document.querySelectorAll("#list li")          
            listItems[index].classList.toggle('checked')
          }
        }