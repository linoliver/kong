import React from 'react'
import RouterView from '../../router/RouterView'
import {NavLink} from 'dva/router'
class Recommend extends React.PureComponent{
    render(){
         const {routes}= this.props
       // console.log( this.props)
        return<div>
               <nav>
               <NavLink to="/main/main/recommend">推荐</NavLink>
                <NavLink to="/main/main/friend">朋友</NavLink>
                <NavLink to="/main/main/radiostation">电台</NavLink>
             </nav>
             <div>
             <RouterView  routes={routes}></RouterView>
             </div>

        </div>
             
        
    }

}
export default  Recommend