import React,{Component} from "react"

// import './assets/css/mima.css'
export default class Mima extends Component{
    render() {
        return(
            <div className="reset clearfloat">
                <div className="top clearfloat box-s">
                    <a className="btn" href="javascript:;" onClick={()=>window.history.go(-1)}>
                        <i className="iconfont icon-fanhui"></i>返回
                    </a>
                </div>
                <div className="content clearfloat">
                    <p className="tit">密码重置</p>
                    <div className="list clearfloat">
                        <ul>
                            <li>
                                <i className="iconfont icon-mima fl db"></i>
                                <input type="text" placeholder="请输入密码" className="fl"/>
                            </li>
                            <li>
                                <i className="iconfont icon-mima fl db"></i>
                                <input type="text" placeholder="确认输入密码" className="fl"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="login-btn">
                    <a href="#">
                        完成
                    </a>
                </div>
            </div>
            )

    }
}