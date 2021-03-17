import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Keyboard } from 'react-native'
import { getContacts } from '../services/phoneContactsService'
import {
  checkContactsPermission,
  requestContactsPermission
} from '../services/permissions'
import { ContactItem, SearchBar } from '../components'
import { GlobalStyles } from '../styles'

const LocalContacts = () => {
  const [contacts, setContacts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const permission = async () => {
      const granted = await checkContactsPermission()
      if (!granted) {
        const response = await requestContactsPermission()
      } else {
        const result = await getContacts()
        if (result.success) {
          const data = result.data.map((item, index) => {
            return {
              _id: index + 1,
              ...item
            }
          })
          const sortedData = data.sort((itemA, itemB) =>
            itemA.displayName > itemB.displayName ? 1 : -1
          )
          setContacts(sortedData)
          setFiltered(sortedData)
        }
      }
    }
    permission()
  }, [])

  const keyExtractor = (item) => {
    return item._id.toString()
  }

  const renderItem = ({ item }) => {
    return <ContactItem item={item} />
  }

  const onChangeTextSearchBar = (text) => {
    setSearchText(text)
    if (text) {
      const result = contacts.filter((item) =>
        item.displayName.toLowerCase().includes(text.toLowerCase())
      )
      setFiltered(result)
    }
  }

  const onClearSearchBar = () => {
    setSearchText('')
    setFiltered(contacts)
    Keyboard.dismiss()
  }

  return (
    <View style={GlobalStyles.container}>
      <Text
        style={{
          fontFamily: 'Dosis-Medium',
          fontSize: 44,
          marginVertical: 12
        }}>
        Contacts
      </Text>
      <SearchBar
        value={searchText}
        onChangeText={onChangeTextSearchBar}
        onClear={onClearSearchBar}
      />
      <FlatList
        data={filtered}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  )
}

export default LocalContacts
