import AuthButton from '../Helper/AuthButton'
import { Account } from 'appwrite'
import {FaYandexInternational} from 'react-icons/fa'

const YandexAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='yandex' btnClassName='yandex-auth-btn' displayText='Sign in with Yandex' successUrl={successUrl} failureUrl={failureUrl} icon={<FaYandexInternational className='icon'/> }   />
  )
}

export default YandexAuth