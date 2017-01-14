import React, { Component } from 'react'
import { ScrollView, View, Image, Dimensions } from 'react-native'
import * as CONSTANTS from '../../constants'
import SectionTitle from './_SectionTitle'
import HomeAnnouncements from './_HomeAnnouncements'

class Home extends Component {
  render () {
    return (
      <ScrollView style={s.homeWrapper}>
        <View style={s.logoWrapper}>
          <Image source={require('../../../img/tm-logo.png')} style={s.logo} resizeMode={Image.resizeMode.contain} />
        </View>
        <View>
          <SectionTitle>Recent Annoucements</SectionTitle>
          <HomeAnnouncements />
        </View>
      </ScrollView>
    )
  }
}

export default Home

const s = {
  homeWrapper: {
    backgroundColor: CONSTANTS.BG_GREY
  },
  logoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    height: 150
  },
  logo: {
    width: Dimensions.get('window').width * 0.4
  }
}
