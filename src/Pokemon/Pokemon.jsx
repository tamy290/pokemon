import Poke from '../img/poke.png';

const Pokemon = (element) => {
    const { name } = element.element
    return (
        <div className='pokemon'>
            <img src={Poke} />
            <p>{`${name}`.toUpperCase()}</p>
        </div>
    );
};

export default Pokemon;