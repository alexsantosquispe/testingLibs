import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import GetLocation from 'react-native-get-location'

import { SearchBar, FAB } from '../components'

const Maps = () => {
  const [searchPlace, setSearchPlace] = useState('')
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.0421
  })

  const getMyLocation = async () => {
    try {
      const result = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 150000
      })
      if (result) {
        setRegion({
          ...region,
          latitude: result.latitude,
          longitude: result.longitude
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} onRegionChange={(reg) => {}}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude
          }}
        />
      </MapView>
      <View
        style={{
          top: 8,
          position: 'absolute',
          width: '90%'
        }}>
        <SearchBar
          value={searchPlace}
          onChangeText={(text) => {
            setSearchPlace(text)
          }}
          onClear={() => {}}
          elevation={8}
        />
      </View>
      <FAB iconName="gps-fixed" onPressHandler={getMyLocation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

export default Maps
