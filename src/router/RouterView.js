import {Route,Switch,Redirect} from 'dva/router'
export default props=>{
    return<Switch>
        {
            props.routes.map((itm,ind)=>{
                return <Route key={ind} path={itm.path} render={
                    (props)=>{
                        if(itm.redirect){
                          return  <Redirect to={itm.redirect}></Redirect>
                        }
                        if(itm.children){
                            return <itm.component {...props} routes={itm.children}></itm.component>
                        }else{
                            return <itm.component {...props} ></itm.component>
                        }
                    }
                }>
                </Route>
            })
        }
    </Switch>
}