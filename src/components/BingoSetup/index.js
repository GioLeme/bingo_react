import React from "react";
import Logo from "../../assets/Logo/logo.svg"
import "./styles.css"

function BingoSetup(props){
    function changeSetup(e){
        e.preventDefault();
        props.setSetup({
            smallerNumber: +e.target.elements.smaller.value,
            higherNumber: +e.target.elements.higher.value
        })
    }
    return (
        <div className="bingoSetup__container">
            <img src={Logo} alt="Logo" className="bingoSetup__logo"/>
            <form onSubmit={changeSetup} className="bingoSetup__form">
                <p className="bingoSetup__hint">De acordo com a sua cartela: </p>
                <input type="text" name="smaller" id="smaller" placeholder="Digite o menor nº" className="bingoSetup__input"/>
                <input type="text" name="higher" id="higher" placeholder="Digite o maior nº" className="bingoSetup__input"/>
                <button type="submit" className="btn">Começar</button>
            </form>
        </div>
  );
}

export default BingoSetup;
