import React, {Component} from  'react';
import upload1 from '../../../assets/upload/1.jpg'
import upload2 from '../../../assets/upload/2.jpg'
export default class Boutique extends Component{
    render(){
        return(
            <div className="boutique clearfloat box-s">
                <div className="boutit clearfloat">
                    <span></span>
                    <samp>精品任选</samp>
                </div>
                <div className="content clearfloat">
                    <ul>
                        <li>
                            <a href="#">
                                <img src={upload1}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={upload2}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}