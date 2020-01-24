import React,{ Component } from 'react';
import './modalbody.css';

class ModalBody extends Component{

    constructor(props){
      super(props);
        this.state={
          items:[],
          load:false,
          id:this.props.ids
        }
    }
  
    fetcher=(id1)=>{
      fetch('https://imagershu.herokuapp.com/get/'+id1)
      .then(res=>res.json())
      .then(json=>{
        this.setState({
          load:true,
          items:json.data,
          id:this.state.id
        })
        //console.log(this.state.id)
      })
    }
  
  
    componentDidMount(){
      this.fetcher(this.state.id);
      this.interval=setInterval(()=>{this.fetcher(this.state.id)},2000)
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