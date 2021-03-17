import React from 'react'
import { View, Text } from 'react-native'
import CircleAvatar from './CircleAvatar'

const ContactItem = ({ item }) => {
  const { displayName } = item
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 8
      }}>
      <CircleAvatar name={displayName} />
      <Text
        style={{
          marginHorizontal: 24,
          fontFamily: 'Dosis-Regular',
          fontSize: 20
        }}>
        {displayName}
      </Text>
    </View>
  )
}

export default ContactItem
