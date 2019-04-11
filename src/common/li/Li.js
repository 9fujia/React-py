import React from 'react';
import {Link} from "react-router-dom";

let Li = (props)=>{
    return (
        <>
            <li className={props.liClass} >
                <Link to={props.url}>
                    <p className={props.pClass}>{props.pText}</p>
                    {
                        props.tag=="span"?<span>{props.tagText}</span>:<i className="iconfont icon-jiantou1 fr"></i>
                    }

                </Link>
            </li>
        </>
    );
}
export default Li;