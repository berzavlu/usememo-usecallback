import { memo, useCallback, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [names, setNames] = useState([])

  const actionMore = () => {
    setCount((state) => {
      return state + 1
    })
  }

  const addName = () => {
    setNames((state) => {
      return [...state, 'luis']
    })
  }

  const onChildIncrement = useCallback(() => {
    actionMore()
  }, [])

  console.log('render app')
  return (
    <div className="App">
      hola
      <div>Counter {count}</div>
      <button onClick={actionMore}>+</button>
      <button onClick={addName}>Add name</button>
      <List
        names={names}
        increment={onChildIncrement}
      />
    </div>
  );
}

const List = memo((props) => {
  console.log('Render: List', props)
  return (
    <div>
      <ul>
        hola
        {props.names.map((name, i) => <li key={i}>{name}</li>)}
      </ul>
      <button onClick={props.increment}>child increment</button>
    </div>
  );
});

export default App;
