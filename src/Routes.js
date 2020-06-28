import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './pages/Home';
import Recording from './pages/Recording';
import Share from './pages/Share';

const Routes = () => (
   <Router
      hideNavBar={true}
   >
      <Scene key = "root">
         <Scene key="home" component={Home} title ="Home" initial={true} hideNavBar={true}/>
         <Scene key="recording" component={Recording} title="Recording" hideNavBar={true}/>
         <Scene key="share" component={Share} title="Share" hideNavBar={true}/>
      </Scene>
   </Router>
)
export default Routes