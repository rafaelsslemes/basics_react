import { useState } from "react";

const CondictionalRender = () => {
    const [show, setShow] = useState(true);
  
    return (
        <div>
            <h2>Switch: {show.toString()}</h2>
            
            <h2> Short if Syntax</h2>
            {show && <h2>Lights ON</h2>}
            <br></br>
            
            <h2> Long if Syntax</h2>
            {show === true
                ?(<h2> Lights ON</h2>)
                :(<h2> Lights OFF</h2>)
            }
            <button onClick={() =>  setShow(!show)}>Switch Lights</button>
        </div>
    )
}

export default CondictionalRender;