import React from 'react'
import AuthButton from '../Helper/AuthButton'
import { Account } from 'appwrite'
import {SiAutodesk} from 'react-icons/si'

const AutodeskAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='autodesk' btnClassName='autodesk-auth-btn' displayText='Sign In with Autodesk' successUrl={successUrl} failureUrl={failureUrl} icon={<SiAutodesk className='icon'/> }   />
  )
}

export default AutodeskAuth