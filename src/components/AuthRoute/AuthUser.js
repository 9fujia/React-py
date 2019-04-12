import React from 'react';
import {connect} from "react-redux";
import {Route,Redirect} from 'react-router-dom';
let AuthUser = ({component:Component,...rest})=>(//props也被放到了rest里面去了
    <Route {...rest} render={(props)=>(
       rest.isLogin?<Component {...props}/>:<Redirect to='/login' {...props}/>
    )}/>
);
const initMapStateToProps = state =>(
    {
        isLogin:state.user.isLogin
    }
)
const initMapDispatchToProps = dispatch =>(
    {}
)
export default connect(initMapStateToProps,initMapDispatchToProps)(AuthUser);