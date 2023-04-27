import React from 'react';

const Dog = ({dog, dispatch}) => {
    return (
        <div>
            {dog.name}
            <button onClick={() => dispatch({type: 'DEL_DOG', payload: dog.id})}>Delete</button>
        </div>
    );
};

export default Dog;