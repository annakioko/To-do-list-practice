import { useState } from 'react'
/* first use state is to store the data of the 
to do that is submitted
second one is to store the update to do list.*/

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddToDo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: generateUniqueId (), text: newTodo.trim(), added: false }]);
      setNewTodo("");
    } else
    {
      alert('Please enter a valid task');
  }
  };
  
  // this function generates id
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
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ol>
    </div>
  );
      };


export default App