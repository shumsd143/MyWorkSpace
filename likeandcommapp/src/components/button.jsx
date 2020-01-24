import React,{Component} from 'react'
import {Button} from 'react-bootstrap';
import axios from 'axios';

class Buttone extends Component {
    constructor(props){
        super (props)
        this.state={
            count:props.number,
            oncheck:false,
            id:props.id
        }
    }

    increment=()=>{
        if(!this.state.oncheck){
            this.setState({
                count:this.state.count+1,
                oncheck:true,
                id:this.state.id
            })
            var url='https://imagershu.herokuapp.com/changelike/'+this.state.id
            console.log(this.state.count+1)
            axios.put(url,{'like':this.state.count+1})
                .then(response=>{
                    console.log(response)
                })
                .catch(response=>{
                    console.log(response)
                }
            )
        }
        else{
            this.setState({
                count:this.state.count-1,
                oncheck:false,
                id:this.state.id
            })
            var url='https://imagershu.herokuapp.com/changelike/'+this.state.id
            console.log(this.state.count-1)
            axios.put(url,{'like':this.state.count-1})
                .then(response=>{
                    console.log(response)
                })
                .catch(response=>{
                    console.log(response)
                }
            )
        }
    }

    render(){
        if(this.state.oncheck){
            return (
                <span>
                    {this.state.count}
                    <Button variant="info" onClick={this.increment}> unLike</Button>
                </span>
            )
        }
        else{
            return (
                <span>
                    {this.state.count}
                    <Button variant="info" onClick={this.increment}> Like</Button>
                </span>
            )
        }
    }
}

export default Buttone