import { useState } from "react"

const ListRender = () => {

    const [list] = useState(['John','Peter', 'Mary']);

  return (
    <div>ListRender
        <ul>    
            {list.map((item)=>(
                <li>{item}</li>
                ))}
        </ul>
    </div>
  )
}

export default ListRender