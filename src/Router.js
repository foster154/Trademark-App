import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
// import LoginForm from './components/LoginForm'
// import AdminConsole from './components/AdminConsole'

const RouterComponent = () => {
  return (
    <Router
      sceneStyle={{ paddingTop: 64 }}
      navigationBarStyle={s.navBar}
      titleStyle={s.navBarTitle}
      barButtonIconStyle={s.barButtonIconStyle}>
      <Scene key='main'>
        {/* <Scene key='adminConsole' component={AdminConsole} title='Admin Console' intial /> */}
      </Scene>
    </Router>
  )
}

export default RouterComponent

const s = {
  navBar: {
    backgroundColor: '#005e96',
    borderBottomColor: '#005e96'
  },
  navBarTitle: {
    color: '#fff'
  },
  barButtonIconStyle: {
    tintColor: '#fff'
  }
}
