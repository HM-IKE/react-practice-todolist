import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Addlist from './components/Addlist/Addlist';
import Todolist from './components/Todolist/Todolist';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todoList: [],
            isSubmit: true
        }
        
        this.CheckSubmit = this.CheckSubmit.bind(this);
        this.AddSubmit = this.AddSubmit.bind(this);
        this.DonehandleClick = this.DonehandleClick.bind(this);
        this.ResethandleClick = this.ResethandleClick.bind(this);
    }

    ResethandleClick(){
        this.setState({
            todoList:[]
        });
    }
    
    CheckSubmit(e){
        let checkforminput = e.target.value;
        checkforminput = checkforminput.trim();
        if(checkforminput){
            this.setState({
                isSubmit: false
            })
        }else{
            this.setState({
                isSubmit: true
            })
        }
    }

    AddSubmit(event){
        event.preventDefault();
        let addtodo = event.target.elements["todo"];
        this.setState({
            todoList: this.state.todoList.concat({
                todo: addtodo.value,
                todonum: this.state.todoList.length+1,
                done: false,
            })
        })

    }

    DonehandleClick(e){
        const num = e.currentTarget.id;

        this.setState({
            todoList: this.state.todoList.filter(n => n.todonum != num)
        })
    }

    renderHeader(){
        return(
            <Header ResethandleClick={this.ResethandleClick}/>
        );
    }

    renderTodolist(){
        return(
            <>
            {this.state.todoList.map(list=>(
                <Todolist
                    todo={list.todo}
                    todonum={list.todonum}
                    DonehandleClick={this.DonehandleClick}
                    key={list.todo}
                />
            ))}
            </>
        );
    }

    renderAddlist(){
        return(
           <Addlist
           CheckSubmit={this.CheckSubmit}
           AddSubmit={this.AddSubmit}
           isSubmit={this.state.isSubmit}
           /> 
        );
    }
        
    render(){
        return(
            <div>
                {this.renderHeader()}
                <div className="todo-list">
                    {this.renderAddlist()}
                    {this.renderTodolist()}
                </div>
            </div>
        );
    }

}



export default App;
