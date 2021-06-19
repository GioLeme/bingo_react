import React,{useState} from "react";
import "./styles.css"

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
        <div className="board__container">
            <div className="board__newNumber">{newNumber}</div>
            <button onClick={handleNumberGeneration} className="btn">Novo número</button>
            <div className="board__calledNumberContainer">
                <div className="board__calledNumber">
               {getCalledNumberList()}
                </div>
                <div>
                <button onClick={endMatch} disabled={!calledNumbers.length} className="btn">Novo Jogo</button>
                </div>
            </div>
        </div>
    )
}
export default BingoBoard
