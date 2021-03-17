import Contacts from 'react-native-contacts'

const getContacts = async () => {
  try {
    const result = await Contacts.getAll()
    return { success: true, data: result }
  } catch (error) {
    return { success: false, error }
  }
}
export { getContacts }
