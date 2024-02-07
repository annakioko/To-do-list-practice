import { useState } from 'react'
/* first use state is to store the data of the 
to do that is submitted
second one is to store the update to do list.*/

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleAddToDo()  {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: generateUniqueId (), text: newTodo.trim(), added: false }]);
      setNewTodo("");
    } 
  };

  function handleDisplayTodo(id) {
    const updatedTodos = [...todos];
    updatedTodos[id].added = !updatedTodos[id].added;
    setTodos(updatedTodos);
  };

  function handleDeleteTodo(id) {
    const newTodos = [...todos];
    newTodos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  
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
      <button onClick={handleAddToDo}>Add</button>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}
          <button onClick={handleDeleteTodo}>Delete</button>
          </li>
        ))}
      </ol>

    </div>
  );
      };


export default App
