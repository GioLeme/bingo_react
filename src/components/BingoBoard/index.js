import React,{useState} from "react";

function BingoBoard({setup}){
    const [newNumber, setNewNumber] = useState();
    const [calledNumbers, setCalledNumbers] = useState([]);

    function handleNumberGeneration(){
        const handleNumber = generateNumber()
        const newCalledNumbers = [...calledNumbers,handleNumber]
        setNewNumber(handleNumber)
        setCalledNumbers([...newCalledNumbers])

        if(newCalledNumbers.length - 1 === setup.higherNumber) endMatch();
    }
    
    function generateNumber(){
        const randomNumber =  Math.floor(Math.random() * (setup.higherNumber - setup.smallerNumber + 1)) + setup.smallerNumber

        if(calledNumbers.length  === setup.higherNumber) return randomNumber
        if(calledNumbers.includes(randomNumber)) return generateNumber();

        return randomNumber
    }

    function getCalledNumberList(){
        return calledNumbers.join(' - ')
    }

    function endMatch(){
        alert('Bingooooo!')
        setNewNumber('')
        setCalledNumbers([])
    }
    
    return(
        <div>
            <button onClick={endMatch} disabled={!calledNumbers.length}>Novo Jogo</button>
            <div>{newNumber}</div>
            <button onClick={handleNumberGeneration}>Novo número</button>
            <div>
               {getCalledNumberList()}
            </div>
        </div>
    )
}
export default BingoBoard
