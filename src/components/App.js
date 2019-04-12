import React,{Component} from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import Home from "../components/home/Home";
import List from '../components/list/List'
import ShopCar from '../components/shopCar/ShopCar'
import Login from '../components/shopLogin/Login'
import Register from '../components/shopRegister/Register'
import Loading from '../common/load/loading';
import Detail from './detail/Detail';
import Center from '../components/center/center'
import Confirm from '../components/confirm/Confirm'
import AddRess from '../components/AddRess/AddRess'
import ManagerAddRess from "../components/managerAddRess/managerAddRess";
import AddNewRess from "../components/addNewRess/AddNewRess";
import Mima from '../components/shopMima/Mima'
export default class App extends Component{
  render(){
    return (
      <React.Fragment>
      <Loading/>
      <Switch>
        <Route path='/index' component={Home} />
        <Route path='/list' component={List} />
        <Route path='/shopCar' component={ShopCar} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/detail' component={Detail} />
        <Route path='/users' component={Center} />
        <Route path='/confirm' component={Confirm} />
        <Route path='/addRess' component={AddRess} />
        <Route path="/managerAddRess" component={ManagerAddRess}/>
        <Route path="/addNewRess" component={AddNewRess}/>
        <Route path="/mima" component={Mima}/>
        <Redirect from='/'  to ='/index'/>
      </Switch>
      </React.Fragment>
    )
  }
}