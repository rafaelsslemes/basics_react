import DestructProperties from './DestructProperties'

const ListIterated = ({people}) => {
    console.log(people);

  return (
    <div>
        <table>
            <th>
                <h1>People Listed</h1>
            </th>
            
            <tr>
                {people.map((person) => (
                    <td>
                        <DestructProperties name={person.name} age={person.age} title={person.title}/>
                    </td>
                ))}
            </tr>
        </table>    
    </div>
  )
}

export default ListIterated