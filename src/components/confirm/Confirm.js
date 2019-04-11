import React from 'react';
import {NavLink} from "react-router-dom";
import jian from './img/jian.jpg';
import jia from './img/jia.jpg';
import upload from './img/19.jpg';
import confirm from './css/confirm.module.css';
export default class Confirm extends React.Component{
    state = {

    };
      render() {
          return(
              <>
                  <header className="mui-bar mui-bar-nav" id="header">
                      <a className="btn" href="javascript:history.go(-1)">
                          <i className="iconfont icon-fanhui"></i>
                      </a>
                      <div className="top-sch-box top-sch-boxtwo flex-col">
                          确认订单
                      </div>
                  </header>

                  <div className="warp warptwo clearfloat">
                      <div className={confirm.confirm + ' clearfloat'}>
                          <div className={confirm.add+' clearfloat box-s'}>
                              <NavLink to="/addRess" >
                                  <div className={confirm.left+' clearfloat fl'}>
                                      <i className="iconfont icon-dizhi1"></i>
                                  </div>
                                  <div className={confirm.middle+' clearfloat fl'}>
                                      <p className={confirm.tit}>
                                          收货人：王小王&nbsp;&nbsp;&nbsp;&nbsp;15806976589
                                      </p>
                                      <p className={confirm['fu-tit']+' over2'}>
                                          收货地址：安徽省合肥市高新区长江西路拓基城市广场金座A2002
                                      </p>
                                  </div>
                                  <div className={confirm.left+" clearfloat fr"}>
                                      <i className="iconfont icon-jiantou1"></i>
                                  </div>
                              </NavLink>
                          </div>
                          <div className={confirm.lie+" clearfloat"}>
                              <a href="detail.html">
                                  <div className={confirm.tu+' clearfloat fl'}>
                                      <img src={upload}/>
                                  </div>
                              </a>
                              <div className={confirm.right+" clearfloat fl"}>
                                  <a href="detail.html">
                                      <p className={confirm.tit+" over"}>小米Max全网通4G大屏智能手机</p>
                                      <p className={confirm['fu-tit']}>颜色：金色 内存：1287G</p>
                                  </a>
                                  <div className={confirm.xia+" clearfloat"}>
                                      <a href="detail.html">
                                          <p className={confirm.jifen +"fl over"}>2998购物币+700积分</p>
                                      </a>
                                      <span className="fr db">×1</span>
                                  </div>
                              </div>
                          </div>
                          <div className={confirm.gmshu + " clearfloat box-s fl"}>
                              <div className={confirm.gcontent + " clearfloat"}>
                                  <p className="fl">购买数量</p>
                                  <div className={confirm.you + " clearfloat fr"}>
                                      <ul>
                                          <li><img src={jian} className="jian"/></li>
                                          <li className="count">1</li>
                                          <li><img src={jia} className="jia"/></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className={confirm.gmshu+' '+confirm.gmshutwo+" clearfloat box-s fl"}>
                              <div className={confirm.gcontent+" clearfloat"}>
                                  <p className="fl">配送方式</p>
                                  <div className={confirm.you + " clearfloat fr"}>
                                      <span>快递 免邮</span>
                                      <i className="iconfont icon-jiantou1"></i>
                                  </div>
                              </div>
                          </div>
                          <div className={confirm.gmshu+' '+confirm.gmshutwo+" clearfloat box-s fl"}>
                              <div className={confirm.gcontent+" clearfloat"}>
                                  <p className="fl">发票信息</p>
                                  <div className={confirm.you + " clearfloat fr"}>
                                      <div className={confirm.xuan + " clearfloat"}>
                                          <div className={confirm.radiotwo}>
                                              <label>
                                                  <input type="radio" name="fapiao" defaultValue=""/>
                                                  <div className={confirm.option}></div>
                                                  <span className={confirm['opt-text']}>需要发票</span>
                                              </label>
                                          </div>
                                      </div>
                                      <div className={confirm.xuan + " clearfloat"}>
                                          <div className={confirm.radiotwo}>
                                              <label>
                                                  <input type="radio" name="fapiao" defaultValue=""/>
                                                  <div className={confirm.option}></div>
                                                  <span className={confirm['opt-text']}>不需要发票</span>
                                              </label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className={confirm.gmshu+' '+confirm.gmshuthree + " clearfloat box-s fl"}>
                              <div className={confirm.gcontent+" clearfloat"}>
                                  <p className="fl">买家留言</p>
                                  <div className={confirm.you+" clearfloat fl"}>
                                      <input type="text" name="" id="" defaultValue="" className={confirm.text}
                                             placeholder="选填 对本次交易需求给商家留言"/>
                                  </div>
                              </div>
                          </div>
                          <div className={confirm.gmshu+" clearfloat box-s fl"}>
                              <p className="fr">共1件商品 合计<samp>￥2998</samp></p>
                          </div>
                          <div className={confirm.integral+" clearfloat fl box-s"}>
                              <div className={confirm.zuo+" clearfloat fl"}>
                                  积分&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可用积分2446
                              </div>
                              <div className={confirm.you+" clearfloat fr"}>
                                  <div className={confirm.xuan+" clearfloat"}>
                                      <div className={confirm.radiothree}>
                                          <label>
                                              <input type="checkbox" name="fapiao" defaultValue=""/>
                                              <div className={confirm.option}></div>
                                          </label>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className={confirm.settlement+" clearfloat"}>
                      <div className={confirm.zuo+" clearfloat fl box-s"}>
                          共<span>1</span>件 总金额：<span>￥2998</span>
                      </div>
                      <a href="submit-order.html" className="fl db">
                          提交订单
                      </a>
                  </div>

              </>
          )
      }
      componentDidMount() {
          $(".jian").click(()=>{
              if($(".count").html() != 1){
                  $(".count").html($(".count").html()-1)
              }
          })
          $(".jia").click(()=>{
              $(".count").html(parseInt($(".count").html())+1)
          });
      }
}
