import React from 'react';
import {Link} from "react-router-dom";
import ress from './assets/css/add-ress.module.css';
export default class AddRess extends React.Component{
    render() {
        return(
            <>
                <header className={ress['report-header']+" mui-bar mui-bar-nav  box-s"} id="header">
                    <a href="javascript:history.go(-1)"><i className="iconfont icon-fanhui fl"></i></a>
                    <p>选择收货地址</p>
                    <span className={"fr "+ress.baocun}><Link to="/managerAddRess">管理</Link></span>
                </header>
                <div id="main" className={"mui-clearfix "+ress['add-address']+' '+ress['choice-address']}>
                    <div className={ress.addlist+" clearfloat"}>
                        <div className={ress.top+" clearfloat box-s"}>
                            <ul>
                                <li>
                                    <span className="fl">孙瑾晨</span>
                                    <span className="fr">1303505****</span>
                                </li>
                                <li>
                                    <span className={ress.moren}>[默认地址]</span>安徽省合肥市蜀山区高新技术产业开发区合肥市高新区长江西路拓基城市广场金座A幢2002
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={ress.addlist+" clearfloat"}>
                        <div className={ress.top+" clearfloat box-s"}>
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
                    </div>
                    <div className={ress.addlist+" clearfloat"}>
                        <div className={ress.top+" clearfloat box-s"}>
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
                    </div>
                </div>
            </>
        )
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