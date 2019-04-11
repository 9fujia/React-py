import React,{Component} from 'react';

import upload3 from '../../../assets/upload/3.jpg'
import upload4 from '../../../assets/upload/4.jpg'

export default  class Seller extends Component{
    render(){
        return(
            <div className="seller clearfloat">
                <div className="boutit clearfloat">
                    <span></span>
                    <samp>热卖推荐</samp>
                </div>
                <div className="content clearfloat">
                    <div className="left clearfloat fl">
                        <a href="detail.html">
                            <div className="top clearfloat box-s">
                                <p className="tit over">天天特惠</p>
                                <span className="over db">每天10点 爆款抢不停</span>
                            </div>
                            <div className="tu">
                                <img src={upload3}/>
                            </div>
                        </a>
                    </div>
                    <div className="right clearfloat fr">
                        <div className="top clearfloat fl">
                            <a href="detail.html">
                                <div className="zuo clearfloat fl box-s">
                                    <p className="tit over">酒水饮料</p>
                                    <span className="over db">炫彩预调鸡尾酒</span>
                                </div>
                                <div className="tu clearfloat fr">
                                    <span></span>
                                    <img src={upload4}/>
                                </div>
                            </a>
                        </div>
                        <div className="top clearfloat fl">
                            <a href="detail.html">
                                <div className="zuo clearfloat fl box-s">
                                    <p className="tit over">酒水饮料</p>
                                    <span className="over db">炫彩预调鸡尾酒</span>
                                </div>
                                <div className="tu clearfloat fr">
                                    <span></span>
                                    <img src={upload4}/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}