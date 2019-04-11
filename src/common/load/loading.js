import React,{Component} from 'react';

export default  class Loading extends Component{
    render(){
        return(
            <div className="loading">
                <div className="loader">
                    <div className="loader-inner pacman">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    </div>
                </div>
            </div>
        )
    }
}