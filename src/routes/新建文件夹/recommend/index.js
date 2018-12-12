import React from 'react'
import RouterView from '../../router/RouterView'
import {NavLink} from 'dva/router'
class Recommend extends React.PureComponent{
    render(){
        const {routes}= this.props
    
        return<div>
               <nav>
                  <NavLink to="/login/recommend/friend">推荐</NavLink>
                  <NavLink to="/login/recommend/radio">朋友</NavLink>
                  <NavLink to="/login/recommend/p">电台</NavLink>
             </nav>
             <div>
             <RouterView  routes={routes}></RouterView>
             </div>

        </div>
             
        
    }

}
export default  Recommend