import './Card.css';
import { getImageUrl } from './utils';
function PassingPropsToComponent()
{
    return (
        <>
            <Card>
                <Avatar
                    size={100}
                    person={{
                        name: 'Katsuko Saruhashi',
                        imageId: 'YfeOqp2'
                    }}
                />
            </Card>
        </>
    );
}

export default PassingPropsToComponent;

function Avatar({ person, size })
{
    return (
        <img
            src={getImageUrl(person)}
            alt={person.name}
            className='avatar'
            width={size}
            height={size}
        />
    );
}
function Card({ children })
{
    return (
        <div className="card">
            {children}
        </div>
    );
}