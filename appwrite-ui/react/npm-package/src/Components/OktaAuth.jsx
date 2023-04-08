import AuthButton from '../Helper/AuthButton.jsx'
import { Account } from 'appwrite'
import {SiOkta} from 'react-icons/si'
import React from 'react'
const OktaAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='okta' btnClassName='okta-auth-btn' displayText='Sign in with Okta ' successUrl={successUrl} failureUrl={failureUrl} icon={<SiOkta className='icon'/> }   />
  )
}

export default OktaAuth 