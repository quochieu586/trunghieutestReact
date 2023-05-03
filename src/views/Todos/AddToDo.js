import React from "react";
import '../App.scss'; 
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class AddToDo extends React.Component {
    state = {
        toDo: ''
    }

    handleOnChangeTodo = (event) => {
        this.setState({
            toDo: event.target.value
        })
    }

    handleOnAdd = (event) => {
        event.preventDefault();
        if (!this.state.toDo) {
            toast.error('Have not entered todo yet!') ;
            return ;
        }
        this.props.handleOnAdding({
            content: this.state.toDo,
            id: 'id' + (this.props.count + 1),
        });
        this.setState({
            toDo: '' 
        })  
        toast.success('Adding successfully!')
    }

    handleEnterPress = (event) => {
        if (event.key === 'Enter') this.handleOnAdd(event); 
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.toDo} 
                        onChange={(event)=>this.handleOnChangeTodo(event)} 
                        onKeyDown={(event)=>this.handleEnterPress(event)}/>
                <button className="App-button" onClick = {(event)=> this.handleOnAdd(event)}
                >Add</button>
            </div>
        )
    }

}

export default AddToDo;