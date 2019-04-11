import React,{Component} from 'react'
import Header from '../../common/commonHome/header/Header'
import Banner from '../../common/commonHome/banner/Banner'
import Kind_1 from '../../common/commonHome/kind/Kind_1'
import Notice from '../../common/commonHome/notice/Notice'
import Boutique from '../../common/commonHome/boutique/boutique'
import Seller from '../../common/commonHome/seller/Seller'
import Onnew from '../../common/commonHome/onnew/Onnew'
import Theme from '../../common/commonHome/theme/Theme'
import Like from '../../common/commonHome/like/Like'
import Footer from '../../common/footer/Footer'
export default class Home extends Component{
    render(){
        return(
            <React.Fragment>
               <Header/>
               <Banner/>
               <Kind_1/>
               <Notice/> 
               <Boutique/>
                <Seller/>
                <Onnew/>
                <Theme/>
                <Like/>  
                <Footer/>
            </React.Fragment>
        )
    }
}