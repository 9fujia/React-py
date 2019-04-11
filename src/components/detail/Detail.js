import React,{Component} from 'react';
import './assets/css/detail.css';
import img1 from './assets/images/21.jpg';
import {NavLink} from 'react-router-dom'
export default class Detail extends Component{
		// this.toshare = this.toshare.bind(this)
	toshare(){
		console.log(1)
	}
	render(){
    	return(
        	<div>
				<header className="mui-bar mui-bar-nav" id="header">
			<a className="btn" href="javascript:history.go(-1)">
	            <i className="iconfont icon-fanhui"></i>
	        </a>
	        <div className="top-sch-box top-sch-boxtwo flex-col">
	            <ul>
	            	<li className="cur"><a href="#">商品</a></li>
	            	<li><a href="#">详情</a></li>
	            	<li><a href="#">评价</a></li>
	            </ul>
	        </div>
	        <a className="btn" href="#">
	            <i className="iconfont icon-gouwuche"></i>
	            <span>2</span>
	        </a>
	    </header>
		<div className="warp warptwo clearfloat">
			<div className="detail clearfloat">
				<div className="banner swiper-container">
		            <div className="swiper-wrapper">
		                <div className="swiper-slide"><a href="javascript:void(0)"><img className="swiper-lazy" src={img1} alt=""/></a></div>
		                
		            </div>
		            <div className="swiper-pagination"></div>
		        </div>
				<div className="top clearfloat box-s">
					<div className="shang clearfloat">
						<div className="zuo clearfloat fl over2 box-s">
							小米MAX智能安卓6.4吋大屏手机双卡指纹识别Xiaomi/小米 小米Max
						</div>
						<div className="you clearfloat fr">
							<i className="iconfont icon-fenxiang"></i>
							<p>分享</p>
						</div>
					</div>
					<div className="xia clearfloat">
						<p className="jifen fl box-s"><samp>2998</samp>购物币+<samp>700</samp>积分</p>
						<span className="fr">销量8件</span>
					</div>
				</div>
				<div className="middle clearfloat box-s">
					<a href="#">
						<span className="fl">商品详情</span>
						<i className="iconfont icon-jiantou1 fr"></i>
					</a>
				</div>
				<div className="middle clearfloat box-s">
					<a href="#">
						<span className="fl">商品评价</span>
						<i className="iconfont icon-jiantou1 fr"></i>
					</a>
				</div>
			</div>
		</div>
		<div className="footerone clearfloat">
			<div className="left clearfloat fl">
				<ul>
					<li>
						<a href="#">
							<i className="iconfont icon-shangcheng"></i>
							<p>商城</p>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="iconfont icon-kefu1"></i>
							<p>客服</p>
						</a>
					</li>				
				</ul>
			</div>
			<div className="right clearfloat fl">
				<span className="btn fl" onClick={this.toshare()}>加入购物车</span>
				<NavLink to='/confirm'  className="btn btnone fl">立即购买</NavLink>
			</div>
		</div>
			</div>  
     	)
	}
}