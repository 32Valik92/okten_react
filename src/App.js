import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Users from "./components/users";
import {showUsers} from "./redux/actions/base.action-creator";

const App = () => {
    let store = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showUsers())
    }, [dispatch])

    return (
        <div>
            {store.isLoading && <h2>Loading...</h2>}
            <Users users={store.users}/>
        </div>
    );
};

export default App;