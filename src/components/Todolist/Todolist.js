import React from 'react';
import './Todolist.css';

function Todolist(props){
    return (
        <div className="list">
            <p className="todo-ele">{props.todo}</p>
            <p className="todo-ele">
                {props.todonum}
            </p>
            <p className="doit-button" id={props.todonum} onClick={(e)=>props.DonehandleClick(e)}>Do it!!</p>
        </div>
    );

}

export default Todolist;
