import { useState } from 'react'
/* first use state is to store the data of the 
to do that is submitted
second one is to store the update to do list.*/

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addToDo()  {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: generateUniqueId (), text: newTodo.trim(), added: false }]);
      setNewTodo("");
    } 
  };

  function displayTodo(id) {
    const updatedTodos = [...todos];
    updatedTodos[id].added = !updatedTodos[id].added;
    setTodos(updatedTodos);
  };

  function deleteTodo(id) {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };
  
  function checkBox(id) {
    const newTodos = [...todos];
    newTodos[id].checked = !newTodos[id].checked
    setTodos(newTodos);

    function edit(id, newTask) {
      const newTodos = [...todos];
      updatedTodos[id].text = newTask;
      setTodos(updatedTodos);
    }
 }

  // this function generates id because we can't use index or rather should not
  const generateUniqueId = () => {
    return '-' + Math.random().toString(36).substring(2, 9);
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <input
        type='text'
        placeholder='Enter your todo here'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addToDo}>Add</button>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}
            <button onClick={function () {
              const newTask = prompt("Edit your todo");
              edit(id, newTask);
            }}>Edit</button>
            <button onClick={deleteTodo}>Delete</button>
            <input 
              type='checkbox'
              checked={todo.checked}
              onChange={function () {
                checkBox(todo.id);
              }}
            />
          </li>
        ))}
      </ol>

    </div>
  );
      };


export default App
