import axios from 'axios';
import React,{ Component } from 'react';
import {Modal,Button,Form} from 'react-bootstrap';
import ModalBody from './modalbody';

class AddModal extends Component {
    constructor(props){
        super (props)
        this.state={
            setshow:false,
            comment: ''
        }
    }
  
    handleClose = (event) => this.setState({
        setshow:false,
        comment:this.state.comment
    });
    handleShow = (event) => {
        this.setState({
            setshow:true,
            comment: this.state.comment
    });}
    handlePost = (event) =>{
        event.preventDefault()
        var data={
            comment:this.state.comment
        }
        axios.post('https://imagershu.herokuapp.com/add/',data)
            .then(response=>{
                console.log(response)
            })
            .catch(response=>{
                console.log(response)
            }
        )
        this.setState({
            setshow:this.state.setshow,
            comment:''
        })
    }
    handleurl=(event)=>{
        this.setState({
            setshow:this.state.setshow,
            comment: event.target.value
        })
        console.log(this.state.comment)
    }
  
    render(){ 
    return (
        <>
            <Button variant="light" onClick={this.handleShow}>
                comment
            </Button>
    
            <Modal show={this.state.setshow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModalBody/>
                </Modal.Body>
                <Modal.Footer>
                    <Form.Control value={this.state.comment} size="lg" type="text" placeholder="Type here...." onChange={this.handleurl}/>
                    <Button variant="success" onClick={this.handlePost}>Post</Button>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        );
    }
  }
export default AddModal; 