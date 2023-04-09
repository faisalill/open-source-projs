import AuthButton from '../Helper/AuthButton.jsx'
import {SiBox} from 'react-icons/si'
import React from 'react'
const BoxAuth  = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='box' btnClassName='appwriteui-react-box-auth-btn' displayText='Sign in with Box' successUrl={successUrl} failureUrl={failureUrl} icon={<SiBox className='icon'/> }   />
  )
}

export default BoxAuth