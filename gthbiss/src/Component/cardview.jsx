import React,{ Component } from 'react';
import {Button} from 'react-bootstrap';
import '../App.css';
import {Card} from 'react-bootstrap';

class Cardview extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
            <Card>
                <Card.Header>{this.props.dataui.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        {this.props.dataui.body} {' '}
                    </p>
                    <footer className="blockquote-footer">
                        {this.props.dataui.user.login}{/* <cite title="Source Title">Source Title</cite> */}
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        )
    }
}

export default Cardview;