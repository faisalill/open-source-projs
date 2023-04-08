import AuthButton from '../Helper/AuthButton.jsx'
import { Account } from 'appwrite'
import {BsLinkedin} from 'react-icons/bs'
import React from 'react'
const LinkedinAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='linkedin' btnClassName='linkedin-auth-btn' displayText='Sign in with LinkedIn ' successUrl={successUrl} failureUrl={failureUrl} icon={<BsLinkedin className='icon'/> }   />
  )
}

export default LinkedinAuth