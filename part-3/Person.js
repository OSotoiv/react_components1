const Person = ({ username, age, hobbies }) => {
    let voteMSG = age >= 18 ? 'please go vote!' : 'you must be 18 to vote'
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {username}</p>
            <p>Age: {age}</p>
            <p>Hobbies:</p>
            <ul>
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
            <h3>{voteMSG}</h3>
            <hr></hr>
        </div>
    )
}