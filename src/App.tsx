import { useState } from 'react';
import ButtonAdd from './components/ButtonAdd';
import ButtonDec from './components/ButtonDec';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleDec = () => {
    const newCount = count - 1;

    if (newCount >= 0) {
      setCount(newCount);
    }
  }

  return (
    <div className="card">
      Counter: {count}

      <div>
        <ButtonAdd handler={setCount} />
        <ButtonDec handler={handleDec}/>
      </div>
    </div>
  )
}

export default App
