import React,{Component} from 'react';
// import './assets/css/list.css';
// import './assets/css/list.css';
import Header from '../../common/commonHome/header/Header'
import Footer from '../../common/footer/Footer'
import Detail from '../../components/detail/Detail'
import {NavLink} from 'react-router-dom';
import img1 from './assets/images/20.jpg';
import img2 from './assets/images/jia.png';
export default class List extends Component{
 render(){
     return(
		 <div className='list'>
		 <Header/>
           	<div className="warp clearfloat">
				<div className="lists clearfloat">
				<div className="top clearfloat">
					<ul>
						<li>默认</li>
						<li>价格<i className="iconfont icon-xiala"></i></li>
						<li>销量<i className="iconfont icon-xiala"></i></li>
					</ul>
				</div>
				<div className="bottom clearfloat">
					<NavLink to='detail'>
						<div className="lie clearfloat">
							<div className="tu clearfloat fl">
								<img src={img1}/>
							</div>
							<div className="right clearfloat fl">								
								<p className="tit">美国阿拉斯加黑鳕鱼（冻黑鳕鱼）</p>
								<div className="xia clearfloat">
									<p className="jifen fl over">2998购物币+700积分</p>
									<span className="fr db"><img src={img2}/></span>
								</div>
							</div>
						</div>
					</NavLink>
				</div>
				</div>
			</div>
			<Footer/>
         </div>
     )
 }
 }