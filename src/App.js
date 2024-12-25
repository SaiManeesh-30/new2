
import './App.css';
import {useState} from 'react';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
       <MyButton/>
       <MyButton/>

      </header>
    </div>
  );
}
function MyButton(props){
  const[count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }

  return(
  <button onClick={handleClick} >Clicked {count} times</button>
  );
}

export default App;
