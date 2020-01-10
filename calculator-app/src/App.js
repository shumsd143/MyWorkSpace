import React, { Component } from 'react';

import './App.css';

import ResultComponent from './components/result';

import KeyPadComponent from "./components/calc";



class App extends Component {
    constructor(){
        super();
        this.state = {
            result: ""
        }
    }

    onClick = button => {
        if(button === "="){
            this.calculate()
        }
        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }
        else if(button==="0"){
          if(this.state.result===''){
            this.setState({
              result: ""
            })
          }
          else{
            var s=this.state.result
            var size=s.length
            if((s[size-1]=='+')||(s[size-1]=='-')||(s[size-1]=='/')||(s[size-1]=='/')){
              this.setState({
                result:this.state.result
              })
            }
            else{
              this.setState({
                result: this.state.result + button
              })
            }
          }
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }
        try {
            this.setState({
                result: (eval(checkResult) || "" ) + ""
            })

        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    };


    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}


export default App;