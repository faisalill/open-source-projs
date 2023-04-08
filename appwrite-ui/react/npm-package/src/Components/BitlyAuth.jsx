import React from 'react'
import AuthButton from '../Helper/AuthButton.jsx'
import { Account } from 'appwrite'
import {SiBitly} from 'react-icons/si'

const BitlyAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='bitly' btnClassName='bitly-auth-btn' displayText='Sign in with Bitly' failureUrl={failureUrl} successUrl={successUrl} icon={<SiBitly className='icon' />}  />
  )
}

export default BitlyAuth