import React from 'react'
import {connect} from 'dva'
import {Link} from 'dva/router'
@connect(state=>{
   let songCount=state.index.songlist.songCount
   let songs=state.index.songlist.songs
  // console.log(songs,songCount)
    return{
        songs,
        songCount
    }
},dispatch=>{
   return {
       search:payload=>{
        dispatch({
            type:'index/search',
            payload
        })
    }
   }
})
class Search extends React.PureComponent{
    submit(){
        let keys=this.refs.search.value
        if(keys){
            this.props.search(keys)
        }
    }
    render(){
        const {songs}=this.props
        console.log(songs)
        return(
            <React.Fragment>
                <input placeholder='搜索' ref='search'/><br/>
                <button onClick={this.submit.bind(this)}>搜索</button>
                <div>
                    {
                      //  /localhost/.test(window.location.host)?'http://123.206.55.50:14000':''
                       songs ? songs.map((itm,ind)=>{
                           return <li key={ind} >
                          <Link to={`/play/${itm.id}`}>111111</Link>
                           <p>{itm.name}</p>
                           <p>{itm.album.name}</p>
                           <span>{`${itm.artists[0].name}-${itm.album.name}`}</span>
                           </li>
                         
                       }): []
                    }

                </div>
            </React.Fragment>
           
        )
    }

}
export default Search