import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from '../styles'

const SearchBar = ({ value, onChangeText, onClear, elevation = 0 }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.ligthGrayColor,
        borderRadius: 8,
        marginVertical: 8,
        alignItems: 'center',
        elevation: elevation
      }}>
      <View style={{ padding: 6 }}>
        <Icon name="search" size={24} color={Colors.grayColor} />
      </View>
      <TextInput
        style={{ flex: 1, fontSize: 17, fontFamily: 'Dosis-Regular' }}
        value={value}
        placeholder="Search..."
        onChangeText={onChangeText}
      />
      {value && value.length > 0 ? (
        <TouchableOpacity
          style={{
            margin: 8,
            padding: 3,
            backgroundColor: Colors.slateColor,
            borderRadius: 24
          }}
          onPress={onClear}>
          <Icon name="x" size={16} color={Colors.grayColor} />
        </TouchableOpacity>
      ) : null}
    </View>
  )
}

export default SearchBar
