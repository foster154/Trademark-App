import React, { Component } from 'react'
import { View, Text } from 'react-native'
import * as CONSTANTS from '../../constants'

class HomeAnnouncements extends Component {
  render () {
    return (
      <View style={s.wrapper}>
        <View style={s.annoucement}>
          <Text style={s.date}>
            12 Jan 2017
            <Text style={s.content}>{'  '}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </Text>

        </View>

        <View style={s.annoucement}>
          <Text style={s.date}>
          25 Dec 2017
          <Text style={s.content}>{'  '}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </Text>
        </View>
      </View>
    )
  }
}

export default HomeAnnouncements

const s = {
  wrapper: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  annoucement: {
    marginTop: 10
  },
  date: {
    fontWeight: '600'
  },
  content: {
    fontWeight: '300'
  }
}
