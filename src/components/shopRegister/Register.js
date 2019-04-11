import React,{Component} from "react"
import {NavLink} from 'react-router-dom';
// import './assets/css/register.css'
export default class Register extends Component{
    render() {
        return(
            <div className="login clearfloat box-s">
                <h3>会员注册</h3>
                <div className="list clearfloat">
                 <ul>
                    <li className="ra3">
                        <p className="fl clearfloat">
                            <span className="opa5"></span>
                            <i className="iconfont icon-yonghuming"></i>
                        </p>
                        <div className="nr clearfloat fl">
                            <span className="opa3"></span>
                            <input type="text" name="" id="" defaultValue="" placeholder="用户姓名" />
                        </div>
                    </li>
                    <li className="ra3">
                        <p className="fl clearfloat">
                            <span className="opa5"></span>
                            <i className="iconfont icon-mima"></i>
                        </p>
                        <div className="nr clearfloat fl">
                            <span className="opa3"></span>
                            <input type="text" name="" id="" defaultValue="" placeholder="登录密码" />
                        </div>
                    </li>
                    <li className="ra3">
                        <p className="fl clearfloat">
                            <span className="opa5"></span>
                            <i className="iconfont icon-shouji"></i>
                        </p>
                        <div className="nr clearfloat fl">
                            <span className="opa3"></span>
                            <input type="text" name="" id="" defaultValue="" placeholder="联系电话" />
                        </div>
                    </li>
                    <li className="ra3">
                        <p className="fl clearfloat">
                            <span className="opa5"></span>
                            <i className="iconfont icon-shenfenzheng"></i>
                        </p>
                        <div className="nr clearfloat fl">
                            <span className="opa3"></span>
                            <input type="text" name="" id="" defaultValue="" placeholder="邮箱" />
                        </div>
                    </li>
                    <li className="ra3">
                        <p className="fl clearfloat">
                            <span className="opa5"></span>
                            <i className="iconfont icon-tuijianrenyaoqing"></i>
                        </p>
                        <div className="nr clearfloat fl">
                            <span className="opa3"></span>
                            <input type="text" name="" id="" defaultValue="" placeholder="推荐人账户" />
                        </div>
                    </li>
                    <li className="ra3">
                        <p className="fl clearfloat">
                            <span className="opa5"></span>
                            <i className="iconfont icon-yanzhengma"></i>
                        </p>
                        <div className="nr nrtwo clearfloat fl">
                            <span className="opa3"></span>
                            <input type="text" name="" id="" defaultValue="" placeholder="验证码" />
                            <samp className="db fr">0212</samp>
                        </div>
                    </li>
                </ul>
            </div>
                <div className="login-btn"><NavLink to='/Register'>注册</NavLink></div>
                <div className="mima mimaone clearfloat">
                    <ul>
                        <li className="fr">
                            <NavLink to='/Login'>立即登录</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            )

    }
}