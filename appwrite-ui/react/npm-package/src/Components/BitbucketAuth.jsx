import React from 'react'
import AuthButton from '../Helper/AuthButton.jsx'
import {FaBitbucket} from 'react-icons/fa'

const BitbucketAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='bitbucket' btnClassName='appwriteui-react-bitbucket-auth-btn' displayText='Sign in with Bitbucket' failureUrl={failureUrl} successUrl={successUrl} icon={<FaBitbucket className='icon' />}  />
  )
}

export default BitbucketAuth