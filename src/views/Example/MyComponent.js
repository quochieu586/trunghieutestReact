import React from "react";
import ChildComponent from "./ChildComponent";
import HTMLform from "./HTMLform";

class MyComponent extends React.Component{
    state = {
        bolero:[
            { id:78, song:'Việt Nam tôi đâu', singer:'Đan Nguyên' }, 
            { id: 75, song: 'Thương hoài ngàn năm', singer: 'Băng Tâm' }
          ]
    }

    handleBolero = (Bolerotoken) => {
        this.setState({
            bolero: [...this.state.bolero, Bolerotoken]
        })
    }

    handleOnDelete = (bolero) =>{
        this.setState({
            bolero: this.state.bolero.filter(item => item.id!== bolero.id) 
        })
    }

    render() {
        return (
            <>
                <HTMLform handleBolero = { this.handleBolero }/>
                <ChildComponent bolero = { this.state.bolero } 
                    handleOnDelete = { this.handleOnDelete }
                />
            </>
        )
    }
}

export default MyComponent;