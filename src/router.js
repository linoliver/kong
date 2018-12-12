import React from 'react';
import { Router } from 'dva/router';
import RouterView from "./router/RouterView"
import config from './router/'
function RouterConfig({ history }) {
    return (
        <Router history={history}> 
          <>
            <RouterView routes={config.routes}></RouterView>
          </>
        </Router>
    );
}
export default RouterConfig;
{/* <></> <React.Fragment> */}