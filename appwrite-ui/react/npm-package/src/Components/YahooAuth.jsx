import AuthButton from '../Helper/AuthButton.jsx'
import {FaYahoo} from 'react-icons/fa'
import React from 'react'
const YahooAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='yahoo' btnClassName='appwriteui-react-yahoo-auth-btn' displayText='Sign in with Yahoo ' successUrl={successUrl} failureUrl={failureUrl} icon={<FaYahoo className='icon'/> }   />
  )
}

export default YahooAuth