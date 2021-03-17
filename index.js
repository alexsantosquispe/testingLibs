import 'react-native-gesture-handler'
import React from 'react'
import { AppRegistry } from 'react-native'
import Root from './src/navigation/Root'
import { name as appName } from './app.json'

const RNRoot = () => <Root />

AppRegistry.registerComponent(appName, () => RNRoot)
