import { useState } from 'react';
import './App.css';
import Advice from './components/Advice';
import Kocka from "./images/icon-dice.svg"

function App() {

  const [data, setData] = useState([])

  const advice = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => setData(data.slip))
    .catch(err => console.log(err))
  }

  return (
    <div className="advice-container">
        <div className='content'> 
          <Advice id={data.id} comment={data.advice}/>
          
        </div>
        
        <button onClick={advice}><img src={Kocka} alt='kocka'/></button>
   
        </div>

  );
}

export default App;
