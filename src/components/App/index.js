import React,{useState} from "react";
import BingoSetup from '../BingoSetup';
import BingoBoard from '../BingoBoard';
import "./styles.css"

function App(){
  const [setup,setSetup]= useState({
    smallerNumber:0,
    higherNumber:0
  });

  return (
    <main className="container">
      {
        setup.smallerNumber && setup.higherNumber
        ? <BingoBoard setSetup={setSetup} setup={setup}/>
        : <BingoSetup setSetup={setSetup}/>
      }
    </main>
  );
}

export default App;
