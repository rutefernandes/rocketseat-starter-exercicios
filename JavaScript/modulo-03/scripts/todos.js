var Todos = JSON.parse(localStorage.getItem('list-todos')) || [];
        var lista = document.querySelector('ul');

        function novoTodo(){
            let input = document.querySelector('input').value;
            Todos.push(input);
            input.value = " ";
            listarTodos();
            saveToStorage();
        }    
        
        function listarTodos(){
            lista.innerHTML = "";
            for(const [i, v] of Todos.entries()) {
                // criando item
                let novoTodo = document.createElement('li');
                novoTodo.innerHTML = v;

                // link para remoção
                let link = document.createElement('a');
                link.setAttribute('href', '#');
                let textoLink = document.createTextNode('Remover');
                link.appendChild(textoLink);
                
                link.onclick = () => { deletarTodo(i) }

                //adicionando o item a lista
                lista.appendChild(novoTodo);
                lista.appendChild(link); 
            }    
        }    
        listarTodos();
        
        function deletarTodo(pos){
            Todos.splice(pos, 1);
            listarTodos();
            saveToStorage();
        }

        function saveToStorage(){	
	        localStorage.setItem('list-todos', JSON.stringify(Todos));
        }
