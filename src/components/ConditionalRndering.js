
function Item({ name, isPacked })
{
    return (
        <li className="item">
            {name} {isPacked && '✔'}
        </li>
    );
}

function ConditionalRendering()
{
    return (
        <>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space Suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Hoto of Tam"
                />

                {/* Space suit ✔
                <Item> ✔</Item>
                <Item>P/Item> */}
            </ul>
        </>
    );
}

export default ConditionalRendering;