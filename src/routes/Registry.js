import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Registry(){
    const [registryData, setRegistryData] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [error, setError] = useState(false);
    
    const addItem = (e) => {
        e.preventDefault();

        //si es false se agrega
        if (!error && textInput.length > 0) {
            const tempData = [...registryData];
            tempData.push(textInput);
            setRegistryData(tempData);
            setTextInput("");
        }
    }

    useEffect(() => {
        if (textInput.length > 10) {
            setError(true);
        }else{
            setError(false);
        }
        
    }, [textInput])

    console.log(registryData);

    function removeItem(index){
        let newData = [...registryData];
        newData.splice(index, 1);
        setRegistryData(newData);
    }

    const removeItem2 = (index) =>{
        let newData = [...registryData];
        newData.splice(index, 1);
        setRegistryData(newData);
    }

    const editItem = (index) =>{
        if(error) return;

        let newData = [...registryData];
        newData[index] = textInput;
        setRegistryData(newData);
    }

    return(
        <div className='registry'>
            <h1>Registry</h1>
            <Link to='/'>Click here to go to Home</Link>
            <form onSubmit={addItem}>
                <input placeholder='type text...' type='text' value={textInput} onChange={(e) => setTextInput(e.target.value)}></input>
                <input type='submit' value='submit'></input>
            </form>
            {error ? <span style={{color:"red"}}>Error occurred</span> : null}
            <ul>
            {
                registryData.map((registry, index) => (
                    <li key={index}>{registry} 
                        <button className='remove' onClick={removeItem.bind(index)}>Remove</button>
                        <button className='update' onClick={() => editItem(index)}>Update</button>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default Registry;