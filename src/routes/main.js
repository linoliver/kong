import React from 'react';
import RouterView from '../../router/RouterView.js'
import {NavLink} from 'dva/router'
import style from './main.css'
import App from './lef'
import {Icon } from 'antd'
class Main extends React.PureComponent{
   render(){
 //    console.log(this.props)
     const {routes}= this.props
      return (
          <div className={style.box}>
             <header>
                 <div className={style.hed}>
                    <App/>
                    <span> <NavLink to="/login/recommend"><Icon type="schedule" theme="filled" /></NavLink></span>
                    <span> <NavLink to="/login/radio"><Icon type="skin" theme="filled" /></NavLink></span>
                    <span> <NavLink to="/login/friend"><Icon type="play-circle" theme="filled" /></NavLink></span>
                    <span> <NavLink to="/search"><Icon type="search" /> </NavLink><br/></span>
                 </div>
                 xxx
             </header>
             <section>
               
                    <RouterView routes={routes}></RouterView>
             </section>
          </div>
      );
   }
}

export default Main
