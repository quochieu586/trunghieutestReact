import React from "react";

class ChildComponent extends React.Component {
  state = {
    hideOrShow: false,
  }

  handleOnHideShow = () => {
    this.setState({
      hideOrShow: !this.state.hideOrShow
    })
  }

  handleOnDelete = (item) => {
    alert(`Delete ${item.song}`); 
    this.props.handleOnDelete(item) 
  }

  render() {
  let { bolero } = this.props;
      return (
        <>
            {this.state.hideOrShow === false ? 
              <div className="Show">
                <button onClick={()=>this.handleOnHideShow()}>Show</button>
              </div>
            
            :
              <div>
                <div className="Infomation">
                    {
                      bolero.map((item,index) => {
                        return(
                          <div key={item.id}>
                              {item.singer}: {item.song} <></> <span onClick={()=>this.handleOnDelete(item)}>x</span>
                          </div>
                        )
                      })
                    }
                </div>
                <div>
                  <button onClick={()=>this.handleOnHideShow()}>Hide</button>
                </div>
              </div>
            }
        </>
      )
  }
}

export default ChildComponent; 