import AuthButton from '../Helper/AuthButton.jsx'
import {BsWordpress} from 'react-icons/bs'
import React from 'react'
const WordpressAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='wordpress' btnClassName='wordpress-auth-btn' displayText='Sign in with Wordpress' successUrl={successUrl} failureUrl={failureUrl} icon={<BsWordpress className='icon'/> }   />
  )
}

export default WordpressAuth