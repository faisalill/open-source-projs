import AuthButton from '../Helper/AuthButton.jsx'
import {SiEtsy} from 'react-icons/si'
import React from 'react'
const EtsyAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='etsy' btnClassName='appwriteui-react-etsy-auth-btn' displayText='Sign in with Etsy ' successUrl={successUrl} failureUrl={failureUrl} icon={<SiEtsy className='icon'/> }   />
  )
}

export default EtsyAuth