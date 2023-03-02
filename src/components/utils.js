export function getImageUrl(person, size = 's')
{
    return (
        //https://i.imgur.com/YfeOqp2s.jpg
        'https://i.imgur.com/' + person.imageId + size + '.jpg'
    );
}