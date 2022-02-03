import { useState } from 'react';
import './App.css';
import { Get } from './Services/Shoose-service.service';
import PantsContex from './MyContex/PantsContex';
import { Pants } from './Components/Pants/Pants.component';
import Shoes from './Components/Shoes/Shoes.component';


function App() {
  const [shoesApi, setShoesApi] = useState([]);
  function GetShoes() {
    Get()
      .then(item => setShoesApi(item))
      .catch(() => console.log("error"))
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
          
      </header>
    </div>
  );
}

export default App;
