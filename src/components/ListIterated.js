import DestructProperties from './DestructProperties'

const ListIterated = ({people}) => {
    console.log(people);

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        <h1>People Listed</h1>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {people.map((person, i) => (
                        <td key={i}>
                            <DestructProperties name={person.name} age={person.age} title={person.title}/>
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>    
    </div>
  )
}

export default ListIterated