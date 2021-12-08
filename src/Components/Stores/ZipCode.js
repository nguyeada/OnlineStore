import React, {useState} from 'react';

function ZipCode(){
    const [zip,setZip]=useState('');
    return(
        <form>
            <fieldset>
                <legend>Zip Code Information</legend>
                <label>
                    Enter your Zip Code:
                </label>
                <input type="text" id="zip" value={zip} placeholder="12345" onChange={e => setZip(e.target.value)}></input>
            </fieldset>
            <button onClick={e=> {
                setZip(e.target.value);
                alert(`You have entered ${zip}`);
                e.preventDefault();        
            }}>Submit</button>
        </form>
    );
}
export default ZipCode;