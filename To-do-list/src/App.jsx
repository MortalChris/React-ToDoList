import { useState } from 'react'
import './App.css'
import Msg from './new.jsx'

let nextId = 0;

function App() {
  const [items, setItems] = useState('');
  const [toDos, setToDo] = useState([]);

  return (
    <>
      <h1>To Do List:</h1>
      <Msg />
      <input
        value={items}
        onChange={e => setItems(e.target.value)}
      />
      <button onClick={() => {
        setToDo([
          ...toDos,
          { id: nextId++, items: items }
        ]);
        setItems('');
      }}>Add</button>
      <ul>
        {toDos.map(toDo => (
          <li key={toDo.id}>{toDo.items}
            <button onClick={() => {
              setToDo(
                toDos.filter(t =>
                  t.id !== toDo.id
                )
              )
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
