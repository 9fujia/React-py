import React,{Component} from "react"
import Footer from '../../common/footer/Footer'

// import './assets/css/shopCar.css'
import jian from './assets/img/jian.jpg';
import jianp from './assets/img/jian.png';
import  tu19 from './assets/img/19.jpg'
import  jia from './assets/img/jia.jpg'
import  jiap from './assets/img/jia.png'
export default class ShopCar extends Component{
    render() {
        return (
            <div >
                <header className="mui-bar mui-bar-nav" id="header">
                    <a className="btn" href="javascript:window.history.go(-1);">
                        <i className="iconfont icon-fanhui"></i>
                    </a>
                    <div className="top-sch-box top-sch-boxtwo flex-col">
                        购物车
                    </div>
                    <a className="btn" href="#">
                        <i className="iconfont icon-lajixiang"></i>
                    </a>
                </header>

                <div className="warp warptwo clearfloat">
                    <div className="shopcar clearfloat">
                        <div className="list clearfloat fl">
                            <div className="xuan clearfloat fl">
                                <div className="radio">
                                    <label>
                                        <input type="checkbox" name="sex" value=""/>
                                        <div className="option"></div>
                                    </label>
                                </div>
                            </div>
                            <a href="#">
                                <div className="tu clearfloat fl">
                                    <span></span>
                                    <img src={tu19}/>
                                </div>
                                <div className="right clearfloat fl">
                                    <p className="tit over">小米Max全网通4G大屏智能手机</p>
                                    <p className="fu-tit over">颜色：金色 内存：1287G</p>
                                    <p className="jifen over">2998购物币+700积分</p>
                                    <div className="bottom clearfloat">
                                        <div className="zuo clearfloat fl">
                                            <ul>
                                                <li><img src={jianp}/></li>
                                                <li>2</li>
                                                <li><img src={jiap}/></li>
                                            </ul>
                                        </div>
                                        <i className="iconfont icon-lajixiang fr"></i>
                                    </div>
                                </div>
                            </a>
                        </div>


                        <div className="list clearfloat fl">
                            <div className="xuan clearfloat fl">
                                <div className="radio">
                                    <label>
                                        <input type="checkbox" name="sex" value=""/>
                                        <div className="option"></div>
                                    </label>
                                </div>
                            </div>
                            <a href="#">
                                <div className="tu clearfloat fl">
                                    <span></span>
                                    <img src={tu19}/>
                                </div>
                                <div className="right clearfloat fl">
                                    <p className="tit over">小米Max全网通4G大屏智能手机</p>
                                    <p className="fu-tit over">颜色：金色 内存：1287G</p>
                                    <p className="jifen over">2998购物币+700积分</p>
                                    <div className="bottom clearfloat">
                                        <div className="zuo clearfloat fl">
                                            <ul>
                                                <li><img src={jianp}/></li>
                                                <li>2</li>
                                                <li><img src={jiap}/></li>
                                            </ul>
                                        </div>
                                        <i className="iconfont icon-lajixiang fr"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="list clearfloat fl">
                            <div className="xuan clearfloat fl">
                                <div className="radio">
                                    <label>
                                        <input type="checkbox" name="sex" value=""/>
                                        <div className="option"></div>
                                    </label>
                                </div>
                            </div>
                            <a href="#">
                                <div className="tu clearfloat fl">
                                    <span></span>
                                    <img src={tu19}/>
                                </div>
                                <div className="right clearfloat fl">
                                    <p className="tit over">小米Max全网通4G大屏智能手机</p>
                                    <p className="fu-tit over">颜色：金色 内存：1287G</p>
                                    <p className="jifen over">2998购物币+700积分</p>
                                    <div className="bottom clearfloat">
                                        <div className="zuo clearfloat fl">
                                            <ul>
                                                <li><img src={jianp}/></li>
                                                <li>2</li>
                                                <li><img src={jiap}/></li>
                                            </ul>
                                        </div>
                                        <i className="iconfont icon-lajixiang fr"></i>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="list clearfloat fl">
                            <div className="xuan clearfloat fl">
                                <div className="radio">
                                    <label>
                                        <input type="checkbox" name="sex" value=""/>
                                        <div className="option"></div>
                                    </label>
                                </div>
                            </div>
                            <a href="#">
                                <div className="tu clearfloat fl">
                                    <span></span>
                                    <img src={tu19}/>
                                </div>
                                <div className="right clearfloat fl">
                                    <p className="tit over">小米Max全网通4G大屏智能手机</p>
                                    <p className="fu-tit over">颜色：金色 内存：1287G</p>
                                    <p className="jifen over">2998购物币+700积分</p>
                                    <div className="bottom clearfloat">
                                        <div className="zuo clearfloat fl">
                                            <ul>
                                                <li><img src={jianp}/></li>
                                                <li>2</li>
                                                <li><img src={jiap}/></li>
                                            </ul>
                                        </div>
                                        <i className="iconfont icon-lajixiang fr"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="settlement clearfloat">
                    <div className="zuo clearfloat fl box-s">
                        合计：<span>￥1420</span>
                    </div>
                    <a href="#" className="fl db">
                        立即结算
                    </a>
                </div>
                <Footer/>
            </div>
        )
            ;
    }
}