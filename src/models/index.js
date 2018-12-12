import { routerRedux } from "dva/router";
import {getToken,setToken} from "../utils/user.js";
import {login} from '../services/index'
import {list,songurl,search,getdetail} from '../services/discover'
import cookie from 'js-cookie'
import Play from "../routes/play/index.js";
export default {
    namespace:'index',
    state:{
        banlist:[],
        list:[],
        songlist:[],
        songsurl:[]
    },
    subscriptions:{
        setup({dispatch,history}){
            return history.listen(({pathname})=>{
            //   console.log('path....',pathname)
                if(pathname!=='/login'){
                    if(!getToken()){
                   //     console.log(routerRedux.replace());
                        dispatch(routerRedux.replace({
                            pathname:'login'
                        }))
                    }
                }
            })
        }

    },
    effects:{
        * bannerLinst({payload},{call,put}){
            let res = yield call(()=>{
               return fetch('http://123.206.55.50:14000/banner')
                .then(res=>res.json())
                .then(body=>body)
               })
           //    console.log(res)
               yield put({
                   type:"changeName",
                   payload:res.banners
               })
           },
        *login({payload},{call,put}){
            console.log(1)
            //console.log(payload)
            // http://123.206.55.50:14000/login/cellphone?phone=17626181997&password=zx1207825344
            // http://123.206.55.50:14000/login/cellphone?phone=undefined&password=147852 
           let response=yield call(login,payload);
           console.log(response.data.account)
           setToken(response.data.account.id);
         yield put({
               type:'updata',
               payload:response.data
           })
           yield put(routerRedux.replace({
            pathname:'/'
         }))
        },
        * getlist({payload},{call,put}){
            let res = yield call(list)
            yield put({
                type:'getbanner',
                payload:res.data.result
            })
          
        },  
        *search({payload},{call,put}){
            let res = yield call(search,payload)
            yield put({
                type:'songs',
                payload:res.data.result
            })
           // console.log(res)
        },
        *songurl({payload},{call,put}){
            let res = yield call(songurl,payload)
            let detail = yield call(getdetail,payload)
        
            let obj={info:res.data.data[0]};
            obj.id=payload;
            obj.url=res.data.data[0].url
            obj.detail=detail.data.songs[0]
            yield put({
                type:'songsurl',
                payload:obj
            })
    //  console.log(detail)

        }
        // *recommend(action,{call,put}){
        //     let res=yield call(recommend)
        //     console.log(res)

        // }
           
    },
   // * login({payload},{call,put}){
     //   let response = yield call(login,payload);
       // console.log(response)
        //设置token
       // cookie.set('id',response.data.account.id)
        //console.log(response.data.account.id)
        //setToken(response.data.account.id)
        // yield put({
        //     type:'upduteState',
        //     payload:response.data
        // })
        // yield put(routerRedux.replace({
        //     pathname:'/'
        // }))
   // },
    reducers:{
        changeName(state,{payload}){
          //  console.log(payload)
            return {...state,banlist:payload}
        },
        updata(state,action){
            return {...state,...action.payload}
        },
        getbanner(state,{payload}){
           // console.log(payload)
            return {...state,list:payload}
        },
        songs(state,{payload}){
            return {...state,songlist:payload}
        },
        songsurl(state,{payload}){
           // console.log(action)
            return {...state,songsurl:payload}
        }
     
    }
}