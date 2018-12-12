import Main from '../routes/main/index'
import Search from '../routes/search/index'
import Login from '../routes/login/index'
import Play from '../routes/play'
//二
import My from '../routes/my'
import Mv from '../routes/mv'
import Inde from '../routes/main/main';
// 三 
import Friend from '../routes/main/friend';
import Radiostation from '../routes/main/radiostation';
import Recommend from '../routes/main/recommend';
export default {
    routes:[{
        path:'/main',
        component:Main,
        children:[{
            path:'/main/my',
            component:My
        },{
            path:'/main/mv',
            component:Mv
        },{
            path:'/main/main',
            component:Inde,
            children:[{
                path:'/main/main/recommend',
                component:Recommend,
            },{
                path:'/main/main/friend',
                component:Friend,
            },{
                path:'/main/main/radiostation',
                component:Radiostation,
            }]
        }]
    },{
        path:'/search',
        component:Search
    },{
        path:'/login',
        component:Login
    },{
        path:'/play/:id?',
        component:Play
    },{
        path:'/',
        redirect:'/main/main/recommend'
    }]
}
// children:[{
//     path:'/login/radio',
//     component:Dain
// },{
//     path:'/login/recommend',
//     component:Recommend,
//     children:[{
//         path:'/login/recommend/p',
//         component:Friend,
//     },{
//         path:'/login/recommend/friend',
//         component:Radio,
//     },{
//         path:'/login/recommend/radio',
//         component:Search,
//     }]
// },{
//     path:'/login/friend',
//     component:Friend
// }
// ]

// ,{
//     path:'/',
//     redirect:'/login/recommend'
// }

