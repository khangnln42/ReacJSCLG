import React from 'react';

class Xe extends React.Component{
    constructor(props){
        console.log('Xe constuctor : ',props )
        super(props);
        this.state = {
            color:this.props.color,
            brand:this.props.brand,
            value: this.props.value
        }
        
    }
    render(){
        return (
            <div>
                {/* <h2 style={{color: "red"}}>Hi, Toi la chiec xe đỏ {}</h2> */}
                {/* <h2 style={{color: this.props.color}}>Hi, Toi la chiec xe {this.props.value}</h2> */}
                {/* <h2 style={{color: this.props.color}}>Nhãn hiệu của tôi là {this.props.brand}</h2> */}
                <h2 style={{color:this.state.color}}>Tôi là xe {this.state.brand} {this.state.value}</h2>
            </div>
       
       
        );
    }
}
export default Xe;