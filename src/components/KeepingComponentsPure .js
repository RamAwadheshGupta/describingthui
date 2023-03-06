let guest = 0;
function Cup()
{
    guest = guest + 1;
    return (
        <h2>Tea cup for guest #{guest}</h2>
    );
}
function TeaSet({ guests })
{
    return (
        <h2 style={{ color: 'red' }}> Tea cup for guest Number # {guests} </h2 >
    );
}

function KeepingComponentsPure()
{
    return (
        <>
            <h1>Keeping Components Pure</h1>
            <p>✸ It does not change any objects or variables that existed before it was called</p>
            <p>✸ Given the same inputs, a pure function should always return the same result.</p>
            <div className="pureComponent">
                <Cup />
                <Cup />
                <Cup />
            </div>
            <div className="pureComponent">
                <TeaSet guests={1} />
                <TeaSet guests={2} />
                <TeaSet guests={3} />
                <TeaSet guests={4} />
            </div>
        </>
    );
}

export default KeepingComponentsPure;