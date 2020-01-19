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
                <AddModal/>
            </span>
        )
    }
}

export default Buttoncomm