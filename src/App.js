import { useReducer, useState } from 'react';
import './App.css';
import { Get } from './Services/Shoose-service.service';
import PantsContex from './MyContex/PantsContex';
import { Pants } from './Components/Pants/Pants.component';
import Shoes from './Components/Shoes/Shoes.component';


const countReducer = (state,action)=>{
  switch (action.type) {
    case "UP":
      return state +1;

      case "DOWN":
      return state -1;

      case "PLUS":
        return state + action.payload;

      case "RESET":
      return 0;
  
    default:
      return state;
  }
}

function App() {
  const [shoesApi, setShoesApi] = useState([]);
  function GetShoes() {
    Get()
      .then(item => setShoesApi(item))
      .catch(() => console.log("error"))
  }

  const [num,setNum] = useState(0);
  const [count,dispatch] = useReducer(countReducer,0);

  const UpCount = ()=>{
    dispatch({type:"UP"})
  }
  const DownCount = ()=>{
    dispatch({type:"DOWN"})
  } 
  const PlusCount = ()=>{
    dispatch({type:"PLUS",payload:num + count})
  }
  const ResetCount = ()=>{
    dispatch({type:"RESET"})
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={GetShoes}>Go</button>
        <ul>
          {shoesApi.map(item => <li>{item.ShoeBrand}</li>)}
        </ul>
        <hr />
       <Shoes/>
        <hr />
        <PantsContex>
          <Pants/>
        </PantsContex>
        <hr/>
        {/* <EquipmentContex>
          <Equipment/>
        </EquipmentContex>  *EquipmentContex* does not work (problem with server). */}
        <hr/>
        <h1>{count}</h1>
        <button onClick={UpCount}>UP</button>
        <button onClick={DownCount}>Down</button>
        <button onClick={ResetCount}>Resrt</button>
        <input onChange={(e)=> num = e.target.value } type={"number"}/>
        <button onClick={PlusCount}>PLUS</button>
        <h1>{num}</h1>

      </header>
    </div>
  );
}

export default App;
