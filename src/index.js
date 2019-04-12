import React from 'react';
import ReactDom from 'react-dom';

//全局资源配置
// import './assets/js/rem';
// import './assets/css/base.css';
// import './assets/css/page.css';
// import './assets/css/all.css'
// import './assets/css/mui.min.css';
// import './assets/css/loaders.min.css';
// import './assets/css/loading.css';
// import './assets/slick/slick';


//路由配置

import { BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import App from "./components/App";
import store from "./store";

ReactDom.render(
 <Provider store={store}>
     <BrowserRouter>
         <Route component={App}/>
     </BrowserRouter>
 </Provider>
  ,
  document.querySelector('#root')
);