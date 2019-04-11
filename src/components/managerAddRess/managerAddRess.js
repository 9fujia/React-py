import React from 'react';
import manager from './assets/css/managerAddRess.module.css';
import Button from '../../common/button/aButton';
import {Link} from "react-router-dom";
export default class ManagerAddRess extends React.Component{
    render() {
        return (
            <>
                <header className={" mui-bar mui-bar-nav "+manager['report-header']+ " box-s"} id="header">
                    <a href="javascript:history.go(-1)"><i className="iconfont icon-fanhui fl"></i></a>
                    <p>管理收货地址</p>
                </header>
                <div id="main" className={"mui-clearfix "+manager.contaniner}>
                    <div className={manager.addlist+" clearfloat"}>
                        <div className={manager.top+" clearfloat box-s"}>
                            <ul>
                                <li>
                                    <span className="fl">孙瑾晨</span>
                                    <span className="fr">1303505****</span>
                                </li>
                                <li>
                                    安徽省合肥市蜀山区高新技术产业开发区合肥市高新区长江西路拓基城市广场金座A幢2002
                                </li>
                            </ul>
                        </div>
                        <div className={manager.bottom+" clearfloat box-s"}>
                            <section className="shopcar clearfloat">
                                <div className={manager.radio+" fl"}>
                                    <label>
                                        <input type="radio" name="sex" defaultValue="" />
                                        <div className={manager.option}></div>
                                        <span className={manager.mradd+' '+manager.smradd+" fl"}>设为默认</span>
                                    </label>
                                </div>

                                <div className={manager.right+" fr clearfloat"}>
                                    <a href="#" className="fr">
                                        <i className="iconfont icon-lajixiang"></i>
                                        删除
                                    </a>
                                    <a href="#" className="fr">
                                        <i className="iconfont icon-shouji"></i>
                                        编辑
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className={manager.addlist+" clearfloat"}>
                        <div className={manager.top+" clearfloat box-s"}>
                            <ul>
                                <li>
                                    <span className="fl">孙瑾晨</span>
                                    <span className="fr">1303505****</span>
                                </li>
                                <li>
                                    安徽省合肥市蜀山区高新技术产业开发区合肥市高新区长江西路拓基城市广场金座A幢2002
                                </li>
                            </ul>
                        </div>
                        <div className={manager.bottom+" clearfloat box-s"}>
                            <section className="shopcar clearfloat">
                                <div className={manager.radio+" fl"}>
                                    <label>
                                        <input type="radio" name="sex" defaultValue="" />
                                            <div className={manager.option}></div>
                                        <span className={manager.mradd+' '+manager.smradd+" fl"}>设为默认</span>
                                    </label>
                                </div>

                                <div className={manager.right+" fr clearfloat"}>
                                    <a href="#" className="fr">
                                        <i className="iconfont icon-lajixiang"></i>
                                        删除
                                    </a>
                                    <a href="#" className="fr">
                                        <i className="iconfont icon-shouji"></i>
                                        编辑
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
                <Button text="添加新地址" style={manager['address-add']+" fl" }url="javascript:;"/>
            </>
        );
    }
    componentDidMount() {
        $(function(){
            //计算内容上下padding
            reContPadding({main:"#main",header:"#header",footer:"#footer"});
            function reContPadding(o){
                var main = o.main || "#main",
                    header = o.header || null,
                    footer = o.footer || null;
                var cont_pt = $(header).outerHeight(true),
                    cont_pb = $(footer).outerHeight(true);
                $(main).css({paddingTop:cont_pt,paddingBottom:cont_pb});
            }
        });
    }
}