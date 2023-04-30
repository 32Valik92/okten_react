import {useDispatch, useSelector} from "react-redux";

const App = () => {
    let store = useSelector(state => state)
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({type: 'INC', payload: 2})
    }

    const decrement = () => {
        dispatch({type: 'DEC', payload: 2})
    }

    const res = () => {
        dispatch({type: 'RESET', payload: 2})
    }

    return (
        <div>

            <h1>{store}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={res}>reset</button>
        </div>
    );
};

export default App;