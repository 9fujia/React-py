import React from 'react';
import center from './center.module.css';
import Li from '../../common/li/Li';
import touxiang from './img/touxiang.png';
import Button from '../../common/button/aButton';

export default class Center extends React.Component{
    render() {
        return (
            <>
                <header className="mui-bar mui-bar1 mui-bar-nav mui-bar-nav1" id="header">
                    <a className="btn" href="javascript:history.go(-1)">
                        <i className="iconfont icon-fanhui"></i>
                    </a>
                    <div className="top-sch-box top-sch-boxtwo top-sch-boxthree flex-col">
                        返回
                    </div>
                </header>
                <div className="warp clearfloat">
                    <div className={center['h-top']+" clearfloat box-s"}>
                        <div className={center.tu+" clearfloat fl"}>
                            <img src={touxiang}/>
                        </div>
                        <div className={center.tu+' '+center.content+" clearfloat fl"}>
                            <p className={center.hname}>王小二</p>
                            <p className={center.htel}>13035059866</p>
                            <p className={center.hpthy}>普通会员</p>
                        </div>
                        <a href="#" className={center.btn+" db clearfloat fr ra3"}>签到</a>
                    </div>
                    <div className={center.cash+" clearfloat"}>
                        <div className={center.shang+" clearfloat"}>
                            <ul>
                                <Li
                                    url="javascript:;"
                                    pText="74.00"
                                    tag="span"
                                    tagText="现金余额"
                                />
                                <Li
                                    url="javascript:;"
                                    pText="4789"
                                    tag="span"
                                    tagText="可用积分"
                                />
                                <Li
                                    url="javascript:;"
                                    pText="104598"
                                    tag="span"
                                    tagText="待用积分"
                                />
                            </ul>
                        </div>
                        <div className={center.shang+' '+center.xia + " clearfloat"}>
                            <ul>
                                <Li
                                    url="javascript:;"
                                    pText="31000"
                                    tag="span"
                                    tagText="商品兑换券"
                                />
                                <Li
                                    url="javascript:;"
                                    pText="56179"
                                    tag="span"
                                    tagText="可倍增积分额值"
                                />
                            </ul>
                        </div>
                    </div>
                    <div className={center.cashlist+" clearfloat"}>
                        <ul>
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="现金账户管理"
                                tag="i"
                            />
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="现金充值"
                                tag="i"
                            />
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="现金转账"
                                tag="i"
                            />
                        </ul>
                    </div>
                    <div className={center.cashlist+" clearfloat"}>
                        <ul>
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="可用积分管理"
                                tag="i"
                            />
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="待用积分管理"
                                tag="i"
                            />
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="业务奖励积分"
                                tag="i"
                            />
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="可用转待用"
                                tag="i"
                            />
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="可用积分转账"
                                tag="i"
                            />
                        </ul>
                    </div>
                    <div className={center.cashlist+" clearfloat"}>
                        <ul>
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="商品兑换券"
                                tag="i"
                            />
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="报单商品券"
                                tag="i"
                            />
                        </ul>
                    </div>
                    <div className={center.cashlist+" clearfloat"}>
                        <ul>
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="申请联盟商家"
                                tag="i"
                            />
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="申请运营中心"
                                tag="i"
                            />
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="消费订单管理"
                                tag="i"
                            />
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="我的好友"
                                tag="i"
                            />
                            <Li
                                liClass="box-s"
                                url="/mima"
                                pClass="fl"
                                pText="修改密码"
                                tag="i"
                            />
                            <Li
                                liClass="box-s"
                                url="javascript:;"
                                pClass="fl"
                                pText="修改姓名"
                                tag="i"
                            />
                        </ul>
                    </div>
                    <Button text="退出登录" style={center['center-btn']+" db ra3" }url="javascript:;"/>
                </div>

                </>
        );
    }
}