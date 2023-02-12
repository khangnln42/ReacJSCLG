import React from 'react';

class Xe extends React.Component{
    render(){
        return (
            <div>
                {/* <h2 style={{color: "red"}}>Hi, Toi la chiec xe đỏ {}</h2> */}
                <h2 style={{color: this.props.color}}>Hi, Toi la chiec xe {this.props.value}</h2>
                <h2 style={{color: this.props.color}}>Nhãn hiệu của tôi là {this.props.brand}</h2>
            </div>
       
       
        );
    }
}
export default Xe;