import React from "react";

class HTMLform extends React.Component{
    state = {
        song: 'Nỗi buồn hoa phượng', 
        singer: 'Thanh Tuyền',
        submitCount: 0
    }

    handleOnSong = (event) => {
        this.setState({
            song: event.target.value
        })
    }

    handleOnSinger = (event) => {
        this.setState({
            singer: event.target.value
        })
    }

    changeSubmit = (event) => {
        event.preventDefault();
        if (!this.state.singer || !this.state.song) {
            alert('Missing information'); 
            return {};
        } 
        this.props.handleBolero({
            id: Math.floor(Math.random() * 100) + 1,
            song: this.state.song,
            singer: this.state.singer
        })
        this.setState({
            submitCount: this.state.submitCount+1,
            song: '', 
            singer:''
        })
    }

    handleEnterPress = (event) => {
        if (event.key === 'Enter') this.changeSubmit(event); 
    }

    render() {

        return (
            <>
                <div className="First">
                    <h1>You click submit {this.state.submitCount} times </h1>
                </div>
                <form className="Second">
                    <label htmlFor="fname">Song:</label><br/>
                    <input 
                        type="text" 
                        value={ this.state.song }
                        onChange={(event) => this.handleOnSong(event)}
                    /><br/>
                    <label htmlFor="lname">Singer:</label><br/>
                    <input 
                        type="text" 
                        value={ this.state.singer }
                        onChange={(event) => this.handleOnSinger(event)}
                    /><br/><br/>
                    <input 
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.changeSubmit(event)} 
                        onKeyDown={(event) => this.handleEnterPress(event)}
                    />
                </form>
                
            </>
        )
    }
}

export default HTMLform; 