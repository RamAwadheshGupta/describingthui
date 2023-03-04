import './renderlist.css';
import { people } from './data.js';
import { getImageUrl } from './utils';
function RenderingLists()
{
    const ListItems = people.map(person =>
        <li key={person.id} className='itemslist'>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p className='descripts'><b>{person.name}: </b> {' ' + person.profession + ' '} known for {person.accomplishment}</p>
        </li>

    );
    return (
        <article>
            <h1>Scientists</h1>
            <ul className='ListItems'>{ListItems}</ul>
        </article>
    );
}

export default RenderingLists;
