import React from 'react';
import {Link} from "react-router-dom";
let Button = (props)=>{
        return (
            <>
                <Link to='/addNewRess' className={props.style}>
                    {props.text}
                </Link>
            </>
        );
}
export default Button;