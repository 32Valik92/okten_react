import Posts from "./Components/ExPosts/Posts/Posts";
import {useState} from "react";
import ShowPost from "./Components/ExPosts/ShowPost/ShowPost";
import ObjectsSpaceX from "./Components/ExSpaceX/ObjectsSpaceX/ObjectsSpaceX";
import './App.css'

const App = () => {

    let [chosenPost, setChosenPost] = useState(null);
    const showInfoPost = (post) => {
        setChosenPost(post)
    }

    return (
        <div>
            <h1>Exercise 1</h1>
            {/*Checking for showing void because there will be an error*/}
            {
                chosenPost
                &&
                (
                    <div className='ShowPost'>
                        {
                            <ShowPost chosenPost={chosenPost}/>
                        }
                    </div>
                )
            }

            <hr/>
            <div className='Posts'>
                <Posts showInfoPost={showInfoPost}/>
            </div>

            <h1>Exercise 2</h1>
            <div className='ObjectsSpaceX'>
                <ObjectsSpaceX/>
            </div>
        </div>
    );
};

export default App;