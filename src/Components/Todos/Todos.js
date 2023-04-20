import React, {useEffect, useState} from 'react';

import {todosService} from "../../service/todosService";
import Todo from "../Todo/Todo";
import './Todos.css';

const Todos = () => {
    const [allTodos, setAllTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(ourData => setAllTodos(ourData.data))
    }, [])

    // allTodos && console.log(allTodos);

    return (
        <div className={'todos'}>
            <h3>Todos Page</h3>

            {
                allTodos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }

        </div>
    );
};

export default Todos;