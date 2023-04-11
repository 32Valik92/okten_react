import '../../App.css'

const Character = ({character}) => {
    return (
        <div className="character">
            <p><b>id = {character.id}</b></p>
            <p>I'm {character.name}</p>
            <p>status — {character.status}</p>
            <p>species — {character.species}</p>
            <p>gender — {character.gender}</p>
            <img src={character.image} alt={character.image}/>

        </div>
    );
};

export default Character;