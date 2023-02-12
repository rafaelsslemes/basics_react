import { useState } from "react"

const ListRender = () => {

    const [list, setList] = useState(['John', 'Peter', 'Mary']);

    const addNumber = () => {
        const pseudoRandomNum = Math.floor(Math.random() * 10);
        
        // The first param always is the previous value of variable hooked
        setList(prevList => [...prevList, pseudoRandomNum]);
            
        console.log(list);
    };
    

    return (
        <div>ListRender
            <ul>    
                {/* bad practice use list index, prefer unique ids generated */}
                {list.map((item, i)=>(
                    <li key={i}>{item}</li>
                    ))}
            </ul>
            <button onClick={addNumber}>Add Number</button>
        </div>
    )

}

export default ListRender