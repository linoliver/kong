import dva from 'dva';
import './common/index.css';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';

// 引入路由模式
//import createHistory from 'history/createBrowserHistory' // 把hash 改为history
import createHistory from 'history/createHashHistory'
// 1. Initialize
const app = dva({
    history:createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/index').default)

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
