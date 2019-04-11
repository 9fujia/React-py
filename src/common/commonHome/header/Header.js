import React,{Component} from 'react'
import './assets/css/header.css'
//函数式组件
const Header = (props) =>(
  <header className="mui-bar mui-bar-nav" id="header" >
			<a className="btn slide-menu" href="#">
	            <i className="iconfont icon-iconfontcaidan"></i>
	        </a>
	        <div className="top-sch-box flex-col">
	            <div className="centerflex">
	                <i className="fdj iconfont icon-sousuo"></i>
	                <input type="text" name="" id="" defaultValue="" className="sch-txt" placeholder="输入您要搜索的商品" />
	            </div>
	        </div>
	        <a className="btn" href="#">
	            <i className="iconfont icon-erweima"></i>
	        </a>
	    </header>
)
export default Header;