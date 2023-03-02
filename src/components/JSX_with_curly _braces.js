const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink',
        paddingBottom: '20px'
    }
};
function TodoCurlyBraces()
{
    return (
        <>
            <h1>JavaScript in JSX with curly braces</h1>
            <div style={person.theme}>
                <h3>{person.name}</h3>
                <img
                    src="https://i.imgur.com/7vQD0fPs.jpg"
                    alt="Gregorio Y. Zara"
                    className="avatar" />
                <ul>
                    <li>Improve the videophone</li>
                    <li>Prepare aeronautics lectures</li>
                    <li>Work on the alcohol-fuelled engine</li>
                </ul>
            </div>
        </>

    );
}

export default TodoCurlyBraces;