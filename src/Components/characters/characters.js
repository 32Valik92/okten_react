import Character from "../character/character";

const Characters = ({allCharacters}) => {
    return (
        <div>
            <h3>Task №2</h3>
            {
                allCharacters.map((character) => (
                    <Character character={character} key={character.id}/>
                ))
            }
        </div>
    );
};

export default Characters;