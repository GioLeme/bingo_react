import React from "react";

function BingoSetup(props){
    function changeSetup(e){
        e.preventDefault();
        props.setSetup({
            smallerNumber: +e.target.elements.smaller.value,
            higherNumber: +e.target.elements.higher.value
        })
    }
    return (
        <div>
            <h1>Bingo</h1>
            <form onSubmit={changeSetup}>
                <input type="text" name="smaller" id="smaller" placeholder="Digite o menor nº"/>
                <input type="text" name="higher" id="higher" placeholder="Digite o maior nº"/>
                <button type="submit">Começar</button>
            </form>
        </div>
  );
}

export default BingoSetup;
