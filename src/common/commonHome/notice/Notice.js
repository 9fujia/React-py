import React,{Component} from 'react'
import './assets/css/notice.css'
import $ from '../../../library/jquery-1.7.2';
import Swipe from '../../../library/swipe'
export default  class Notice extends Component {
    render(){
        return(
            <div className="notice clearfloat box-s">
		        	<p className="tit clearfloat fl">利民公告：</p>
		        	<div className="left fl clearfloat box-s">
						<div className="slider autoplay">
							<div>这里是新闻资讯内容可以手滑滚动</div>
							{/* <div>这里是新闻资讯内容可以手滑滚动</div>
							<div>这里是新闻资讯内容可以手滑滚动</div>
							<div>这里是新闻资讯内容可以手滑滚动</div>
							<div>这里是新闻资讯内容可以手滑滚动</div>
							<div>这里是新闻资讯内容可以手滑滚动</div> */}
						</div>							
					</div>		
					<a href="#" className="nmore clearfloat fr">更多</a>
		        </div>
        )
	}
}