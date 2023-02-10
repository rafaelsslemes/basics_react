import { useState } from "react";

const DataByHook = () => {

    let dynamicValue = 'Initial Value';

    const [dynaValue, setDynaValue] = useState('Initial Value');

    return (
    <div>
        <h2>
            Wrong Dynamic Value 
        </h2>
        <h3>{dynamicValue}</h3>
        <button onClick={()=> {dynamicValue='Changed'}}>Change Value</button>

        <h2>
            Rigth Dynamic Value 
        </h2>
        <h3>{dynaValue}</h3>
        <button onClick={()=> {setDynaValue('Changed')}}>Change Value</button>
    </div>
  )
}

export default DataByHook