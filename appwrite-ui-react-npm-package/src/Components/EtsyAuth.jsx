import AuthButton from '../Helper/AuthButton.jsx'
import { Account } from 'appwrite'
import {SiEtsy} from 'react-icons/si'
import React from 'react'
const EtsyAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='etsy' btnClassName='etsy-auth-btn' displayText='Sign in with Etsy ' successUrl={successUrl} failureUrl={failureUrl} icon={<SiEtsy className='icon'/> }   />
  )
}

export default EtsyAuth