import { StyleSheet } from 'react-native'
import { Colors } from './Colors'

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ligthColor,
    paddingHorizontal: 16
  },
  circleAvatar: {
    width: 46,
    height: 46,
    borderRadius: 25,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
