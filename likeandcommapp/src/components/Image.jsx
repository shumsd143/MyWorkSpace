import React from 'react'
import './imagedeb.css';
import Button from './button';
import Buttoncomm from './buttoncomm';


const Image = (props)=>{
    return (
        <div className="image">
            <img className="bgm" src={props.url} alt="Wrong Image Url" />
            <div>
                <Button/>
                <Buttoncomm className="comments"/>
            </div>
        </div>
    )
}

export default Image