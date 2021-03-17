import React from 'react'
import { View, Text } from 'react-native'
import { Colors, GlobalStyles } from '../styles'

const getFirstLetter = displayName => {
  if (displayName) {
    return displayName.toUpperCase()[0]
  }
  return displayName
}

const CircleAvatar = ({ name }) => {
  return (
    <View style={GlobalStyles.circleAvatar}>
      <Text
        style={{
          color: Colors.ligthColor,
          fontFamily: 'Dosis-Bold',
          fontSize: 25
        }}>
        {getFirstLetter(name)}
      </Text>
    </View>
  )
}

export default CircleAvatar
