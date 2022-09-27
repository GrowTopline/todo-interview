import { useEffect, useState } from 'react';
import { ApiClient, ToDo } from './api';
import './App.css';

const apiClient = new ApiClient();

function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [label, setLabel] = useState('');

  useEffect(() => {
    apiClient
      .getToDos()
      .then((fetchedTodos) => setTodos(fetchedTodos))
      .catch(console.error);
  }, [setTodos]);

  return (
    <>
      <h1>To Do List</h1>
      <input value={label} onChange={(e) => setLabel(e.target.value)} />
      <button onClick={() => apiClient.addTodo(label)}>Add ToDo</button>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.label}</div>
      ))}
    </>
  );
}

export default App;
