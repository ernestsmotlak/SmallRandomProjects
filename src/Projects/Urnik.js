import React, { useState } from 'react';

const Urnik = () => {
    const [inputtedString, setInputtedString] = useState('');
    const [finalSum, setFinalSum] = useState(0);

    const cleanString = () => {
        if (inputtedString !== null) {
            const numbersArray = inputtedString.match(/\d+/g);
            console.log("Prvic: ", numbersArray);

            let sum = 0;
            if (numbersArray) {
                for (let i = 0; i < numbersArray.length; i++) {
                    sum += parseInt(numbersArray[i], 10);
                }
                setFinalSum(sum);
            }
            else {
                console.log('No numbers found!');
                setFinalSum(0); // Reset the sum if no numbers found
            }
        }
        else {
            console.log('No String!');
        }
    };

    return (
        <div className='urnik d-flex justify-content-center'>
            <form className="card" style={{ width: '30rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Get Hours/Money</h5>
                    <div>
                        <label className="form-label">Enter the text here:</label> <br />
                        <input type='text' value={inputtedString} onChange={(e) => setInputtedString(e.target.value)}>
                        </input>
                        <br />
                        <button type='button' onClick={cleanString} className='mt-3 btn btn-primary'>Submit</button>
                    </div>
                </div>
                {finalSum > 0 ? finalSum : null}
            </form>

        </div>
    );
};

export default Urnik;
