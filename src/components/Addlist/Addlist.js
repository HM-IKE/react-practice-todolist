import React from 'react';
import './Addlist.css';

function Addlist(props){
    return (
        <div>
            <form className="add-todo" onSubmit={(event)=>props.AddSubmit(event)}>
                <p className="todo">TODO</p>
                <input type="text" name="todo" onChange={(e)=>props.CheckSubmit(e)}/>
                <button className="add-button" type="submit" disabled={props.isSubmit}>Add</button>
            </form>
        </div>
    );
}

export default Addlist;
