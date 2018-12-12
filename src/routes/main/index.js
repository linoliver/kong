import React from 'react'
import RouterView from '../../router/RouterView'
import {NavLink} from 'dva/router'
import style from './main.css'
import App from './lef'
import {Icon } from 'antd'
class Main extends React.PureComponent{
    render(){
         const {routes} =this.props
      //   console.log(routes)
        return (
            <div className={style.box}>
            <header>
                <div className={style.hed}>
                   <App/>
                   <span> <NavLink to="/main/my"><Icon type="schedule" theme="filled" /></NavLink></span>
                   <span> <NavLink to="/main/main"><Icon type="skin" theme="filled" /></NavLink></span>
                   <span> <NavLink to="/main/mv"><Icon type="play-circle" theme="filled" /></NavLink></span>
                   <span> <NavLink to="/search"><Icon type="search" /> </NavLink><br/></span>
                </div>
            </header>
            <section>
                   <RouterView routes={routes}></RouterView>
            </section>
         </div>
        )
    }

}
export default Main