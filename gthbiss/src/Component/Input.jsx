import React,{ Component } from 'react';
import {InputGroup,FormControl} from 'react-bootstrap';
import Button from './Button'
import Para from './Para'


class Inputone extends Component {
    constructor(props){
        super(props);
        this.state={
            un: "",
            rn: "",
            data:"goodies",
            onload:false,
            click:false
        }
    }
    changeun=(event)=>{
        this.setState({
            un:event.target.value,
            rn:this.state.rn,
            data:this.state.data,
            onload:false,
            click:false
        })
    }
    changern=(event)=>{
        this.setState({
            un:this.state.un,
            rn:event.target.value,
            data:this.state.data,
            onload:false,
            click:false
        })
    }
    fetcher=(url)=>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            this.setState({
                un:"",
                rn:"",
                data:json,
                onload:true,
                click:this.state.click
            })
        })
    }
    clicker=(event)=>{
        console.log(this.state,event)
        var newurl="https://api.github.com/repos/"+this.state.un+"/"+this.state.rn+"/issues"
        this.setState({
            un:this.state.un,
            rn:this.state.rn,
            data:this.state.data,
            onload:this.state.onload,
            click:true
        })
        this.fetcher(newurl)
    }

    render(){
        var {onload,data,click}=this.state
        if(click){
            if(!onload){
                return (
                    <div>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text>UserName and RepositoryName</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl onChange={this.changeun} />
                            <FormControl onChange={this.changern} />
                        </InputGroup>
                        <Button onClick={this.clicker} uname={this.un} rname={this.rn}/>
                        <p>Loading......................</p>
                    </div>
                )
            }
            else{
                return (
                    <div>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text>UserName and RepositoryName</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl onChange={this.changeun} />
                            <FormControl onChange={this.changern} />
                        </InputGroup>
                        <Button onClick={this.clicker} uname={this.un} rname={this.rn}/>
                        <Para datatobe={data}/>
                    </div>
                )
            }
        }
        else{
            return (
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text>UserName and RepositoryName</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl onChange={this.changeun} />
                        <FormControl onChange={this.changern} />
                    </InputGroup>
                    <Button onClick={this.clicker} uname={this.un} rname={this.rn}/>
                </div>
            )
        }        
    }
}

export default Inputone;