import './App.css';
import Simpsons from "./Components/simpsons/Simpsons";
import {rickAndMorty, simpsons} from "./Data/Data";
import Characters from "./Components/characters/characters";

function App() {
    return (
        <div>
            <h1>Lesson 1</h1>
            <Simpsons family={simpsons}/>

            <Characters allCharacters={rickAndMorty}/>
        </div>
    );
}

export default App;