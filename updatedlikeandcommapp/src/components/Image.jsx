import React from 'react'
import './imagedeb.css';
import Button from './button';
import Buttoncomm from './buttoncomm';


const Image = (props)=>{
    return (
        <div className="image">
            <img className="bgm" src={props.url} alt="Wrong Image Url" />
            <div>
                <Button number={props.liker} id={props.id}/>
                <Buttoncomm className="comments" id={props.id}/>
            </div>
        </div>
    )
}

export default Image