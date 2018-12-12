import React from 'react'
import { connect } from 'dva';
@connect(state=>{
  // console.log(state.index.list)
     return{
        list:state.index.list
     }
 },dispatch=>{
    return {
        getbanner:payload=>{
         dispatch({
             type:'index/getlist',
             payload

         })
     }
    }
 })
class List extends React.PureComponent{
    componentDidMount(){
        this.props.getbanner()
    }
    render(){
       
        const {list}=this.props
        console.log(list)
        return <div>
            {list.length&&list.map((itm,ind)=>{
                return <li key={ind}>
                {itm.name}
                </li>
            })}
        </div>
    }

}
export default List