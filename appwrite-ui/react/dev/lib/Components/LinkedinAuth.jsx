import AuthButton from '../Helper/AuthButton.jsx'
import {BsLinkedin} from 'react-icons/bs'
import React from 'react'
const LinkedinAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='linkedin' btnClassName='linkedin-auth-btn' displayText='Sign in with LinkedIn ' successUrl={successUrl} failureUrl={failureUrl} icon={<BsLinkedin className='icon'/> }   />
  )
}

export default LinkedinAuth