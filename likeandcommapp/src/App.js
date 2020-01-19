import React,{ Component } from 'react';
import './App.css';
import Imagenew from './components/Image';
import Input from './components/Input';

class App extends Component{

  constructor(props){
    super(props);
      this.state={
        items:[],
        load:false,
      }
  }

  fetcher=()=>{
    fetch('http://127.0.0.1:2222/geturl/')
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
    this.interval=setInterval(()=>{this.fetcher()},5000)
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
        <div>
          <h1 className="header" >Imaging</h1>
          <Input/>
          <div className="head" id="high">
            {items.map(data=>
              <Imagenew url={data.imgurl} />
            )}
          </div>
        </div>
      )
    }
  }
}

export default App;