import React,{ Component } from 'react';
import {Button} from 'react-bootstrap';
import '../App.css';

class Buttonone extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div className="buttonone">
                <Button variant="outline-primary" onClick={this.props.onClick}>Show the Issues available in Repository</Button>
            </div>
        )
    }
}

export default Buttonone;