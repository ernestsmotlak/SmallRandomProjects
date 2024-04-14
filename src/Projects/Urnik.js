import React, { useState } from 'react';

const Urnik = () => {
    const [inputtedString, setInputtedString] = useState('');
    const [finalSum, setFinalSum] = useState(0);
    const [emptyInputMessage, setEmptyInputMessage] = useState(null);
    const [noNumbersMessage, setnoNumbersMessage] = useState(null);

    const cleanString = (e) => {
        e.preventDefault(); // Prevents form submission and page refresh
        if (!inputtedString.trim()) {
            setEmptyInputMessage('Empty string!');
            console.log('No String!');
            return; // exit the function early if input is empty
        }

        const numbersArray = inputtedString.match(/\d+/g);

        let sum = 0;
        if (numbersArray) {
            for (let i = 0; i < numbersArray.length; i++) {
                sum += parseInt(numbersArray[i], 10);
            }
            setFinalSum(sum);
        } else {
            console.log('No numbers found!');
            setnoNumbersMessage('No numbers in the given string!');
            setFinalSum(0); // Reset the sum if no numbers found
        }
    };

    return (
        <div className='urnik d-flex justify-content-center'>
            <form className="card" style={{ width: '30rem' }} onSubmit={cleanString}>
                <div className="card-body">
                    <h3 className="card-title mb-2">Get Hours/Money</h3>
                    <div>
                        <label className="form-label">Enter timetable numbers here:</label> <br />
                        <input type='text' value={inputtedString} onChange={(e) => setInputtedString(e.target.value)}>
                        </input>
                        <br />
                        <button type='submit' className='mt-3 btn btn-primary'>Submit</button>
                    </div>
                </div>
                {finalSum > 0 && <p>Number of hours worked: {finalSum}  <br /></p>}
                {finalSum > 0 && <p>Money expected: {(finalSum * 6.2).toFixed(1)} €</p>}
                {emptyInputMessage && <div className='text-danger mb-3'>{emptyInputMessage}</div>}
                {noNumbersMessage && <div className='text-danger mb-3'>{noNumbersMessage}</div>}

            </form>
        </div>
    );
};

export default Urnik;
