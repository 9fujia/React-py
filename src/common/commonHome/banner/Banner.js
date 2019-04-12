import React,{Component} from 'react'
import banner from './assets/img/banner.jpg'
import './assets/css/slider.css';
import $ from '../../../library/jquery-1.7.2';
import Swipe from '../../../library/swipe'
export default class Banner extends Component{
  render() {
    return (
      <div className="banner">
        <ul className="clearfix">
            {
                this.props.banner&&this.props.banner.map((item,index)=>(
                    <li key={index}>
                        <img src={'http://47.101.129.105/'+item.pic_address} alt=""/>
                        <div className="text-box"></div>
                    </li>
                ))
            }

        </ul>

      </div>
    )
  }
  componentDidUpdate() {
      this.props.banner &&  new Swipe($('.banner')[0], {
          auto: 2000,
          continuous: true,
          stopPropation: true,
          callback: function (index, element) {
              $('.banner ol li').removeClass('active');
              $('.banner ol li').eq(index).addClass('active');
          }
      })
  }
}