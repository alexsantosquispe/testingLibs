import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors } from '../styles'

const FloatActionButton = ({ iconName, onPressHandler }) => {
  return (
    <TouchableOpacity
      style={{
        bottom: 16,
        right: 16,
        elevation: 8,
        position: 'absolute',
        width: 54,
        height: 54,
        borderRadius: 27,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.ligthColor
      }}
      onPress={onPressHandler}>
      <Icon name={iconName} size={26} color={Colors.darkColor} />
    </TouchableOpacity>
  )
}

export default FloatActionButton
