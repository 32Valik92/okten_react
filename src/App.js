import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "./redux/actions/base.action-creator";

const App = () => {
    let store = useSelector(state => state)
    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        dispatch(decrement())
    }

    const onRes = () => {
        dispatch(reset())
    }

    return (
        <div>

            <h1>{store}</h1>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>decrement</button>
            <button onClick={onRes}>reset</button>
        </div>
    );
};

export default App;