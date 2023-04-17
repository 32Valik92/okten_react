import Cars from "./components/Cars/Cars";
import UserForm from "./components/Jsonplaceholder/UserForm/UserForm";
import CommentForm from "./components/Jsonplaceholder/CommentForm/CommentForm";

const App = () => {
    return (
        <div>
            <Cars/>
            <hr/>

            <UserForm/>
            <hr/>

            <CommentForm/>
        </div>
    );
};

export default App;