import React,{Component} from "react"

// import './assets/css/login.css'
// export default class Login extends Component{
//     render() {
//         return(
//                 <div className="login">
//                     <div class="login clearfloat box-s">
//                          <h3>会员登录</h3>
//                         <div class="list clearfloat">
//                         <ul>
//                             <li class="ra3">
//                                 <p class="fl clearfloat">
//                                     <span class="opa5"></span>
//                                     <i class="iconfont icon-yonghuming"></i>
//                                 </p>
//                                 <div class="nr clearfloat fl">
//                                     <span class="opa3"></span>
//                                     <input type="text" name="" id="" value="" placeholder="用户姓名" />
//                                 </div>
//                              </li>
//                             <li class="ra3">
//                                 <p class="fl clearfloat">
//                                     <span class="opa5"></span>
//                                     <i class="iconfont icon-mima"></i>
//                                 </p>
//                                 <div class="nr clearfloat fl">
//                                     <span class="opa3"></span>
//                                     <input type="text" name="" id="" value="" placeholder="登录密码" />
//                                 </div>
//                             </li>
//                             <li class="ra3">
//                                 <p class="fl clearfloat">
//                                     <span class="opa5"></span>
//                                     <i class="iconfont cc"></i>
//                                 </p>
//                                 <div class="nr nrtwo clearfloat fl">
//                                     <span class="opa3"></span>
//                                     <input type="text" name="" id="" value="" placeholder="验证码" />
//                                 <samp class="db fr">0212</samp>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                     <div class="mima clearfloat">
//                         <ul>
//                             <li class="fl">
//                                 <div class="xuan clearfloat fl">
//                                    <div class="radiofour" >
//                                     <label>
//                                         <input type="checkbox" name="" value="" />
//                                         <div class="option"></div>
//                                         <span class="opt-text">记住密码</span>
//                                     </label>
//                                     </div>
//                                 </div>
//                             </li>
//                             <li class="fr">
//                                 <a href="verification.html">找回密码？</a>
//                             </li>
//                         </ul>
//                    </div>
//                     <div class="login-btn">
//                         <a href="xuzhi.html">登 录</a>
//                         <a href="register.html" class="btn">
//                         <span class="opa5"></span>
//                         <samp>注 册</samp>
//                         </a>
//                     </div>
//                </div>
//             </div>
//             )
//
//     }
// }

import {NavLink} from 'react-router-dom'

const Login =(props)=>(
    <div className="login">
        <div className="login clearfloat box-s">
            <h3>会员登录</h3>
            <div className="list clearfloat">
                <ul>
                    <li className="ra3">
                        <p className="fl clearfloat">
                            <span className="opa5"></span>
                            <i className="iconfont icon-yonghuming"></i>
                        </p>
                        <div className="nr clearfloat fl">
                            <span className="opa3"></span>
                            <input type="text" name="" id=""  defaultValue="" placeholder="用户姓名"/>
                        </div>
                    </li>
                    <li className="ra3">
                        <p className="fl clearfloat">
                            <span className="opa5"></span>
                            <i className="iconfont icon-mima"></i>
                        </p>
                        <div className="nr clearfloat fl">
                            <span className="opa3"></span>
                            <input type="text" name="" id="" defaultValue="" placeholder="登录密码"/>
                        </div>
                    </li>
                    <li className="ra3">
                        <p className="fl clearfloat">
                            <span className="opa5"></span>
                            <i className="iconfont cc"></i>
                        </p>
                        <div className="nr nrtwo clearfloat fl">
                            <span className="opa3"></span>
                            <input type="text" name="" id=""  defaultValue="" placeholder="验证码"/>
                            <samp className="db fr">0212</samp>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mima clearfloat">
                <ul>
                    <li className="fl">
                        <div className="xuan clearfloat fl">
                            <div className="radiofour">
                                <label>
                                    <input type="checkbox" name="" defaultValue=""/>
                                    <div className="option"></div>
                                    <span className="opt-text">记住密码</span>
                                </label>
                            </div>
                        </div>
                    </li>
                    <li className="fr">
                        <NavLink to='/Mima'>找回密码？</NavLink>
                        {/*<a href="verification.html">找回密码？</a>*/}
                    </li>
                </ul>
            </div>
            <div className="login-btn">
                <NavLink to="/Login">登 录</NavLink>
                {/*<a href="xuzhi.html">登 录</a>*/}
                <NavLink to='/Register' className="btn">
                    <span className="opa5"></span>
                    <samp>注 册</samp>
                </NavLink>
                
            </div>
        </div>
    </div>
);

export default Login;