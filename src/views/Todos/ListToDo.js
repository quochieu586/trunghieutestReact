import React from "react";
import AddToDo from "./AddToDo";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class ListToDo extends React.Component {
    state = {
        list: [ {content: 'Doing homework', id: 'id1'},
                {content: 'Play video game', id: 'id2'}
              ], 
        count: 2,
        editTodo: {}
    }

    handleOnAdding = (working) => {
        this.setState({
            count: this.state.count + 1, 
            list: [...this.state.list, working]
        })
    }

    handleOnDelete = (working) => {
        this.setState({
            count: this.state.count - 1, 
            list: this.state.list.filter(item=> item.id !== working.id )
        })
        toast.success('Delete successfully!');

    }

    handleOnChange = (event) => {
        let token = this.state.editTodo ;
        token.content = event.target.value ;
        this.setState({
            editTodo: token
        })
    }

    handleOnEditOrSave = (item) => {
        let IsEmpty = Object.keys(this.state.editTodo).length === 0 ;
        if (IsEmpty === true || this.state.editTodo.id !== item.id) {
            this.setState({
                editTodo: item
            })
            return ;
        }
        let { editTodo } = this.state;
        let tokenList = this.state.list;
        let toDoIndex = tokenList.findIndex((obj => obj.id === editTodo.id));
        tokenList[toDoIndex].content = editTodo.content;

        this.setState({
            list: tokenList,
            editTodo: {}
        })
    }

    render() {
        let IsEmpty = Object.keys(this.state.editTodo).length === 0 ;
        let list = this.state.list ;

        return(
            <>
                <AddToDo handleOnAdding = { this.handleOnAdding }
                        count = { this.state.count }/> 
                <div>       
                    { 
                        list.map((item,index) => {
                            return(
                                <div key={ item.id } className="list-todo-content">
                                    <span> { index+1 } - </span>
                                    { (IsEmpty === true || this.state.editTodo.id !== item.id) ?
                                            <span> { item.content } </span>
                                        : 
                                            <input type="text" value={ this.state.editTodo.content }
                                                    onChange={(event)=>this.handleOnChange(event)}
                                            />
                                    }
                                    <button className="App-button"
                                        onClick={() => this.handleOnEditOrSave(item)}>
                                            {
                                                (IsEmpty === true || this.state.editTodo.id !== item.id) ?
                                                'Edit' : 'Save'
                                            }
                                    </button>
                                    <button className="App-button" 
                                        onClick={() => this.handleOnDelete(item)}>delete
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                <div> ListToDo practices </div>    
            </>
        )
    }
}

export default ListToDo; 