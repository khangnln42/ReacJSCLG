import React from 'react';

class Xe extends React.Component{
    constructor(props){
        console.log('1/Xe constuctor : ',props );
        super(props);
        this.state = {
            color:this.props.color,
            brand:this.props.brand,
            value: this.props.value
            // color:"red",
            // brand:"Honda",
            // value: "đỏ"
        };
        
    }
    // static getDerivedStateFromProps(props, state) {
        // console.log('2/getDerivedStateFromProps : ',props );
        // return {color: props.color,
                // brand: props.brand,
                // value: props.value
        // };
    // }
    render(){
        console.log('3/Render: ');
        return (
            <div>
                {/* <h2 style={{color: "red"}}>Hi, Toi la chiec xe đỏ {}</h2> */}
                {/* <h2 style={{color: this.props.color}}>Hi, Toi la chiec xe {this.props.value}</h2> */}
                {/* <h2 style={{color: this.props.color}}>Nhãn hiệu của tôi là {this.props.brand}</h2> */}
                <h2 style={{color:this.state.color}}>Tôi là xe {this.state.brand} {this.state.value}</h2>
            </div>
       
       
        );
    }
    componentDidMount(){
        console.log('4/Xe componentDidMount', this.props);
        setTimeout(() => {
            this.setState({
                color:'yellow',
                brand:'BMW',
                value:'vàng'
            });
            console.log('5/Xe componentDidMount đã đổi Props', this.props);
        },3000);
    }
}
export default Xe;