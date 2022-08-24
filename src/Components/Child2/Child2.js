import { Component } from "react";


class Child2 extends Component {
    
    render() { 
        return (<>
        {this.props.children}
        </>);
    }
}
 
export default Child2;