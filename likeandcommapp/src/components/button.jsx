import React,{useState} from 'react'
import {Button} from 'react-bootstrap';

const Buttone = props=>{
    let [setCount,count]=useState(0)
    var counter=0
    return (
        <span>
            <Button variant="info" onClick={()=>count(setCount+1)}>{counter=counter+setCount} Like</Button>
        </span>
    )
}

export default Buttone