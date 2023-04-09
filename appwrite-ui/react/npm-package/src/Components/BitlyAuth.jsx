import React from 'react'
import AuthButton from '../Helper/AuthButton.jsx'
import {SiBitly} from 'react-icons/si'

const BitlyAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='bitly' btnClassName='bitly-auth-btn' displayText='Sign in with Bitly' failureUrl={failureUrl} successUrl={successUrl} icon={<SiBitly className='icon' />}  />
  )
}

export default BitlyAuth