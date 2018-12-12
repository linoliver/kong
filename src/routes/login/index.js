import React from 'react'
import {connect} from 'dva'

@connect(state=>{
   console.log(state)
    return{
        login:state.login
    }
},dispatch=>{
   return {
       logins:payload=>{
        dispatch({
            type:'index/login',
            payload
        })
    }
   }
})
class Login extends React.PureComponent{
    constructor(props){
        super(props);
            this.state={
                user:'17626181997',
                password:'zx1207825344'
            }
    }
    submit(){
        // if(!/\d{11}/.test(this.state.user)){
        //     alert(2)//17626181997
        //     return
        // }
        // if(!/\s{6,20}/.test(this.state.user)){
        //     alert(1)
        //     return
        // }
   //     console.log(this.props.logins)
        this.props.logins({
            user:this.state.user,
            password:this.state.password
        })
    }
    render(){
        console.log(this.props)
        return(
            <React.Fragment>
                <input placeholder='手机号'
                 value={this.state.user}
                 onChange={e=>this.setState({user:e.target.value})}/><br/>
                <input placeholder='密码'
                 value={this.state.password} 
                 onChange={e=>this.setState({password:e.target.value})}/><br/>
                <button onClick={this.submit.bind(this)}>登录</button>
            </React.Fragment>
           
        )
    }

}
export default Login