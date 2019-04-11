import React,{Component} from 'react';
import upload6 from '../../../assets/upload/6.jpg'
import upload7 from '../../../assets/upload/7.jpg'

export default class Onnew extends Component{
    render(){
        return(
            <div className="onnew clearfloat">
		        	<div className="boutit clearfloat">
		        		<span></span>
		        		<samp>每周上新</samp>
		        	</div>
		        	<div className="content clearfloat">
		        		<div className="top clearfloat">
		        			<div className="list clearfloat fl box-s">
		        				<a href="detail.html">
			        				<div className="zuo clearfloat fl box-s">
			        					<p className="tit over">电器数码</p>
				        				<span className="over db">大屏就是小米max</span>
			        				</div>
			        				<div className="tu clearfloat fr">
			        					<span></span>
			        					<img src={upload6}/>
			        				</div>
		        				</a>
		        			</div>
		        			<div className="list clearfloat fl box-s">
		        				<a href="detail.html">
			        				<div className="zuo clearfloat fl box-s">
			        					<p className="tit over">电器数码</p>
				        				<span className="over db">大屏就是小米max</span>
			        				</div>
			        				<div className="tu clearfloat fr">
			        					<span></span>
			        					<img src={upload6}/>
			        				</div>
		        				</a>
		        			</div>
		        		</div>
		        		<div className="bottom clearfloat">
		        			<div className="list clearfloat fl">
		        				<a href="detail.html">
		        					<div className="shang clearfloat fl box-s">
			        					<p className="tit over">一起玩耍</p>
				        				<span className="over db">一款贱贱的ted熊</span>
			        				</div>
			        				<div className="tu clearfloat fr">
			        					<span></span>
			        					<img src={upload7}/>
			        				</div>
		        				</a>
		        			</div>
		        			<div className="list clearfloat fl">
		        				<a href="detail.html">
		        					<div className="shang clearfloat fl box-s">
			        					<p className="tit over">一起玩耍</p>
				        				<span className="over db">一款贱贱的ted熊</span>
			        				</div>
			        				<div className="tu clearfloat fr">
			        					<span></span>
			        					<img src={upload7}/>
			        				</div>
		        				</a>
		        			</div>
		        			<div className="list clearfloat fl">
		        				<a href="detail.html">
		        					<div className="shang clearfloat fl box-s">
			        					<p className="tit over">一起玩耍</p>
				        				<span className="over db">一款贱贱的ted熊</span>
			        				</div>
			        				<div className="tu clearfloat fr">
			        					<span></span>
			        					<img src={upload7}/>
			        				</div>
		        				</a>
		        			</div>
		        		</div>
		        	</div>
		        </div>
        )
    }
}