import React from 'react';
import './App.css';
import {connect} from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      {props.myname}
      <button onClick={()=>{props.changeName("changed")}}>change</button>
    </div>
  );
}
const mapStateToProps =(state)=>{
  return {
    myname:state.name
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    changeName:(name)=>{dispatch({type:'Change_name',payload:name})}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);