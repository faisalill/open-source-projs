import AuthButton from '../Helper/AuthButton.jsx'
import { Account } from 'appwrite'
import {BsDropbox} from 'react-icons/bs'
import React from 'react'
const DropBoxAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='dropbox' btnClassName='dropbox-auth-btn' displayText='Sign in with Dropbox' successUrl={successUrl} failureUrl={failureUrl} icon={<BsDropbox className='icon'/> }   />
  )
}

export default DropBoxAuth