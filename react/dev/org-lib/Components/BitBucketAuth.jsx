import React from 'react'
import AuthButton from '../Helper/AuthButton'
import {FaBitbucket} from 'react-icons/fa'
import { Account } from 'appwrite'

const BitBucketAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='bitbucket' btnClassName='bitbucket-auth-btn' displayText='Sign in with Bitbucket' failureUrl={failureUrl} successUrl={successUrl} icon={<FaBitbucket className='icon' />}  />
  )
}

export default BitBucketAuth