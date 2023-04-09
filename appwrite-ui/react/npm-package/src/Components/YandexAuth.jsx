import AuthButton from '../Helper/AuthButton.jsx'
import {FaYandexInternational} from 'react-icons/fa'
import React from 'react'
const YandexAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='yandex' btnClassName='yandex-auth-btn' displayText='Sign in with Yandex' successUrl={successUrl} failureUrl={failureUrl} icon={<FaYandexInternational className='icon'/> }   />
  )
}

export default YandexAuth