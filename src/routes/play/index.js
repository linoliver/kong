import React from 'react'
import {connect} from 'dva'
import styles from './index.css'
import {fortime}from '../../utils/index'
import { width } from 'window-size';
@connect(state=>{
  // console.log(state.index.songsurl)
//    console.log(state.index.detail&&state.index.detail.al)
    return{
        songsurl:state.index.songsurl.detail,
        list:state.index.songsurl.info
    }
},dispatch=>{
   return {
       play:id=>{
        dispatch({
            type:'index/songurl',
            payload:id
        })
    }
   }
})
class Play extends React.PureComponent{
    constructor(){
        super();
        this.state={
            currentTime:'',
            duration:'',
            mtime:0,
            isplay:true
        }
    }
    componentDidMount(){
        let id =this.props.match.params.id;
        this.props.play(id)
    }
    
   get currentTime(){
     //   console.log(this.refs)
        if(this.refs.audio&&this.refs.audio.currentTime){
          //  console.log('dddd',this.refs.audio)
            return fortime(this.refs.audio.currentTime)
        }
      
    }
   get duration(){
    if(this.refs.audio&&this.refs.audio.duration){
        //  console.log('dddd',this.refs.audio)
          return fortime(this.refs.audio.duration)
      }
      return '00:00';
   }
   changestate(){
       this.setState({
           isplay:!this.state.isplay
       },()=>{
        this.state.isplay?this.refs.audio.play():this.refs.audio.pause()
       })
   

   }
    timeUpdate(){
        let mtime=this.refs.audio.currentTime/this.refs.audio.duration*100;
        console.log(mtime)
        this.setState({
            currentTime:this.refs.audio.currentTime,
            duration:this.refs.audio.duration,
            mtime:mtime

        })
    }
    render(){
        console.log(this.props)
        if(!this.props.list){
            return null
        }
        if(!this.props.songsurl){
            return null
        }
        return <div>
            <h1>播放歌曲</h1>
            <img className={this.state.isplay?styles.picUrl:styles.disable} src={this.props.songsurl.al.picUrl}/>
            <br/>
            <br/>
            <div>
                <span>{this.currentTime}</span>
                <p className={styles.line}>
                  <b style={{width:this.state.mtime+'%'}}></b>
               </p>
               <span>{this.duration}</span>
            </div>
           
            <br/>
            <br/>
            <br/>
            <div>
                <button>上一曲</button>
                <button onClick={this.changestate.bind(this)}>{this.state.isplay?'暂停':'播放'}</button>
                <button>下一曲</button>
            </div>
            <h1>{this.props.songsurl.al.name}</h1>
            
            <audio
             src={this.props.list.url} 
             ref='audio' 
             autoPlay
             onTimeUpdate={()=>this.timeUpdate()}></audio>
        </div>
    }
}
export default Play