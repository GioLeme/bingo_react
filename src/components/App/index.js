import React,{useState} from "react";
import BingoSetup from '../BingoSetup';
import BingoBoard from '../BingoBoard';

function App(){
  const [setup,setSetup]= useState({
    smallerNumber:0,
    higherNumber:0
  });

  return (
    <div className="App">
      {
        setup.smallerNumber && setup.higherNumber 
        ? <BingoBoard setSetup={setSetup} setup={setup}/> 
        : <BingoSetup setSetup={setSetup}/>
      }
    </div>
  );
}

export default App;
