import React, { PropTypes} from 'react'
import { View, Text } from 'react-native'
import * as CONSTANTS from '../../constants'

const SectionTitle = ({ children }) => {
  return (
    <View>
      <Text style={s.titleText}>{children.toUpperCase()}</Text>
    </View>
  )
}

SectionTitle.propTypes = {
  children: PropTypes.string
}

export default SectionTitle

const s = {
  titleText: {
    textAlign: 'center',
    fontSize: 16,
    color: CONSTANTS.TM_RED,
    fontWeight: '700'
  }
}
