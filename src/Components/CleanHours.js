import React, { useState } from 'react'
import './CleanHours.css';

const CleanHours = () => {
    const [showMoneyDiv, setShowMoneyDiv] = useState(false);
    const [money1, setMoney1] = useState(0);
    const [money2, setMoney2] = useState(0);
    const [steviloUr, setSetsteviloUr] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();

        var inputText = document.getElementById('inputText').value;
        var cleanedText = inputText.replaceAll('ure', '').replaceAll('uri', '').replaceAll('ur', '');
        var arr = cleanedText.split('  ');

        let sum = parseInt(0);
        for (let i = 0; i < arr.length; i++) {
            sum = sum + parseInt(arr[i]);
        }

        setSetsteviloUr(sum);
        setMoney1(sum * 5.8);
        setMoney2(sum * 6.2);
        setShowMoneyDiv(true);

    };
    return (

        <div className='cleanHours'>CleanHours

            <form onSubmit={handleSubmit}>
                <input type="text" id="inputText" />
                <br />
                <br />
                <input type="submit" value="Submit" className='btnForm' />
            </form>

            <br /><br />

            {showMoneyDiv && (
                <div>
                    <div>Money: {money1}</div>
                    <div>Possible money: {money2}</div>
                </div>
            )}

            <br />
            Stevilo ur: {steviloUr}

        </div>
    )
}

export default CleanHours