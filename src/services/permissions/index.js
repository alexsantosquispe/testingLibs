import { request, check, PERMISSIONS, RESULTS } from 'react-native-permissions'

const checkContactsPermission = async () => {
  try {
    const granted = await check(PERMISSIONS.ANDROID.READ_CONTACTS)
    return granted === RESULTS.GRANTED
  } catch (error) {
    return error
  }
}

const requestContactsPermission = async () => {
  try {
    const granted = await request(PERMISSIONS.ANDROID.READ_CONTACTS)
    return granted === RESULTS.GRANTED
  } catch (error) {
    return error
  }
}

export { checkContactsPermission, requestContactsPermission }
