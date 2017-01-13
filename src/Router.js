import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Home from './components/Home'
import * as CONSTANTS from './constants'

const RouterComponent = () => {
  return (
    <Router
      sceneStyle={{ paddingTop: 64 }}
      navigationBarStyle={s.navBar}
      titleStyle={s.navBarTitle}
      barButtonIconStyle={s.barButtonIconStyle}>
      <Scene key='main'>
        <Scene key='home' component={Home} title='Trademark Church' intial />
      </Scene>
    </Router>
  )
}

export default RouterComponent

const s = {
  navBar: {
    backgroundColor: CONSTANTS.TM_RED
  },
  navBarTitle: {
    color: '#fff'
  },
  barButtonIconStyle: {
    tintColor: '#fff'
  }
}
