import React from 'react';
import './AddNewRess.css';
import Li from "../../common/li/Li";
export default class AddNewRess extends React.Component{
    render() {
        return (
            <>
                <header className="mui-bar mui-bar-nav report-header box-s" id="header">
                    <a href="javascript:history.go(-1)"><i className="iconfont icon-fanhui fl"></i></a>
                    <p>添加新地址</p>
                    <span className="fr baocun">保存</span>
                </header>
                <div id="main" className="mui-clearfix add-address">
                    <div className="plist clearfloat data">
                        <ul>
                            <li className="clearfloat">
                                <a href="#">
                                    <p className="fl">收货人</p>
                                    <input type="text" className="fl shuru" name="" id="" defaultValue="" placeholder="孙瑾晨"/>
                                </a>
                            </li>
                            <li className="clearfloat">
                                <a href="#">
                                    <p className="fl">联系电话</p>
                                    <i className="fr iconfont icon-jiahao"></i>
                                </a>
                            </li>
                            <Li
                                liClass="clearfloat"
                                url="javascript:;"
                                tag={"i"}
                                pClass="fl"
                                pText="所在地区"
                            />
                            <Li
                                liClass="clearfloat"
                                url="javascript:;"
                                tag={"i"}
                                pClass="fl"
                                pText="街道"
                            />
                        </ul>
                    </div>
                    <textarea name="" rows="4" cols="" placeholder="请填写详细地址，不少于5个字"
                              className="textare box-s"></textarea>
                    <div className="address-btn clearfloat">
                        <span className="szwmr fl">设为默认</span>
                        <a href="#" className="toggle toggle--on fr"></a>
                    </div>
                </div>
            </>
        );
    }
    componentDidMount() {
        $('.toggle').click(function(e){
            var toggle = this;
            e.preventDefault();
            $(toggle).toggleClass('toggle--on').toggleClass('toggle--off').addClass('toggle--moving');
            setTimeout(function(){
                $(toggle).removeClass('toggle--moving');
            }, 200)

        });
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
