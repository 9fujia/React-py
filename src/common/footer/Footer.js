import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
const  Footer = (props) => (
	<footer className="page-footer fixed-footer" id="footer">
		<ul>
			<li>
				<NavLink activeClassName='active' to='/index'>
					<i className="iconfont icon-shouye"></i>
					<p>首页</p>
				</NavLink>
			</li>
			<li>
				<NavLink to='/list'>
					<i className="iconfont icon-icon04"></i>
					<p>分类</p>
				</NavLink>
			</li>
			<li>
				<NavLink to='/shopCar'>
					<i className="iconfont icon-gouwuche"></i>
					<p>购物车</p>
				</NavLink>
			</li>
			<li>
				<NavLink to='/users'>
					<i className="iconfont icon-yonghuming"></i>
					<p>我的</p>
					</NavLink>
			</li>
		</ul>
	</footer>
)
export default Footer