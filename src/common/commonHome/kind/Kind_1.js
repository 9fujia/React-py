import React,{Component} from 'react'
import './assets/css/kind_1.css';
import icon1 from './assets/img/icon1.png'
import icon2 from './assets/img/icon2.png'
import icon3 from './assets/img/icon3.png'
import icon4 from './assets/img/icon4.png'


export default class Kind_1 extends Component{
  render(){
    return (
      <div className="cation clearfloat box-s">
        <ul>
          <li>
            <a href="#">
              <img src={icon1}/>
              <p>报单专区</p>
            </a>
          </li>
          <li>
            <a href="lianmeng.html">
              <img src={icon2}/>
              <p>联盟商家</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={icon3}/>
              <p>猜你喜欢</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={icon4}/>
              <p>热门商品</p>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}