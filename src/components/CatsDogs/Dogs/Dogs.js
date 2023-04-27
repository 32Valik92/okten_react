import React from 'react';
import {useForm} from "react-hook-form";
import Dog from "./Dog";

const Dogs = ({stateDispatch}) => {
    const {reset, register, handleSubmit} = useForm();
    const [{dogs}, dispatch] = stateDispatch;

    const saveDog = (dog) => {
        dispatch({type: 'ADD_DOG', payload: dog});
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveDog)}>
                <input type="text" placeholder={'dog'} {...register('name')}/>
                <button>Save</button>
            </form>
            {dogs.map(dog => <Dog key={dog.id} dispatch={dispatch} dog={dog}/>)}
            {/*{dogs.map(dog => <div key={dog.id}>{dog.name}*/}
            {/*    <button onClick={() => dispatch({type: 'DEL_DOG', payload: dog.id})}>Delete</button>*/}
            {/*</div>)}*/}
        </div>
    );
};

export default Dogs;