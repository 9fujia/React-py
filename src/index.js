import React from 'react';
import ReactDom from 'react-dom';


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