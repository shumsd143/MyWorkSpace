import React,{ Component } from 'react';
import './inputdeb.css';
import axios from 'axios';

class Input extends Component {
    constructor(props){
        super (props)
        this.state={
            url: ''
        }
    }

    handleurl=(event)=>{
        this.setState({
            url: event.target.value
        })
        console.log(this.state.url)
    }

    submission=(event)=>{
        event.preventDefault()
        console.log(this.state.url)
        var data={
            imgurl:this.state.url
        }
        axios.post('https://imagershu.herokuapp.com/addurl/',data)
            .then(response=>{
                this.setState({
                    url:''
                })
                console.log(response)
            })
            .catch(response=>{
                console.log(response)
            }
        )
    }

    render () {
        return (
            <form onSubmit={this.submission}>
                <input className="imgurl" value={this.state.url} type="text" placeholder="   Enter the image url" onChange={this.handleurl}/>
                <button className="buttoncss" type="submit" >Submit</button>
            </form>
        )
    }
}

export default Input