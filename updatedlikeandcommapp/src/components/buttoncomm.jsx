import React,{ Component } from 'react';
import './buttoncomm.css';
import AddModal from './addModal';

class Buttoncomm extends Component {
    constructor(props){
        super (props)
    }

    render(){
        return (
            <span className="bgn">
                <AddModal idc={this.props.id}/>
            </span>
        )
    }
}

export default Buttoncomm