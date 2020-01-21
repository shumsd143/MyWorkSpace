import React,{ Component } from 'react';
import {Alert} from 'react-bootstrap';
import '../App.css';
import Cardview from './cardview'

class Para extends Component {
    constructor(props){
        super(props);
        this.state={
            items:this.props.datatobe,
            type:Array.isArray(this.props.datatobe)
        }
        console.log(Array.isArray(this.state.items))
    }


    render(){
        var {items,type} =this.state
        if(!type){
            return (
                <Alert variant="danger" className="paraone">
                    <Alert.Heading>Oh! Something Went Wrong!</Alert.Heading>
                    <p>
                        This is caused due to either Wrong username or repositoryname or you don'have any issues to be resolved
                        <br/> please try to check or retry
                    </p>
                </Alert>
            )
        }
        else{
            return (
                <div className="paraone">
                    {items.map(data=>
                        <Cardview dataui={data} />
                    )}
                </div>
            )
        }
    }
}

export default Para;