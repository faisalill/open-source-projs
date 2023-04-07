import AuthButton from '../Helper/AuthButton.jsx'
import { Account } from 'appwrite'
import {SiDisqus} from 'react-icons/si'
import React from 'react'
const DisqusAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='disqus' btnClassName='disqus-auth-btn' displayText='Sign in with Disqus ' successUrl={successUrl} failureUrl={failureUrl} icon={<SiDisqus className='icon'/> }   />
  )
}

export default DisqusAuth