import React from 'react'
import AuthButton from '../Helper/AuthButton.jsx'
import {SiAutodesk} from 'react-icons/si'

const AutodeskAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='autodesk' btnClassName='appwriteui-react-autodesk-auth-btn' displayText='Sign In with Autodesk' successUrl={successUrl} failureUrl={failureUrl} icon={<SiAutodesk className='icon'/> }   />
  )
}

export default AutodeskAuth