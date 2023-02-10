import { useState } from "react"

const ListRender = () => {

    const [list] = useState(['John','Peter', 'Mary']);

  return (
    <div>ListRender
        <ul>    
            {/* bad practice use list index, prefer unique ids generated */}
            {list.map((item, i)=>(
                <li key={i}>{item}</li>
                ))}
        </ul>
    </div>
  )

}

export default ListRender