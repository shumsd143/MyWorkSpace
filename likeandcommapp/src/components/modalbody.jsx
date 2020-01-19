import React,{ Component } from 'react';
import './modalbody.css';

class ModalBody extends Component{

    constructor(props){
      super(props);
        this.state={
          items:[],
          load:false,
        }
    }
  
    fetcher=()=>{
      fetch('http://127.0.0.1:2222/get/')
      .then(res=>res.json())
      .then(json=>{
        this.setState({
          load:true,
          items:json.data,
        })
      })
    }
  
  
    componentDidMount(){
      this.fetcher();
      this.interval=setInterval(()=>{this.fetcher()},2000)
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render(){
  
      var { load, items }=this.state;
      //console.log('app',items)
  
      if(!load){
        return(
          <div>
            loading....
          </div>
        )
      }
      else{
        return (
            <div className="Modaler">
                {items.map(data=>
                <p><span className="namer">Unknown</span>   -  {data.comment}</p>
                )}
            </div>
        )
      }
    }
  }

export default ModalBody;