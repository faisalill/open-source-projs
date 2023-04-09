import AuthButton from '../Helper/AuthButton.jsx'
import {SiNotion} from 'react-icons/si'
import React from 'react'
const NotionAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='notion' btnClassName='appwriteui-react-notion-auth-btn' displayText='Sign in with Notion ' successUrl={successUrl} failureUrl={failureUrl} icon={<SiNotion className='icon'/> }   />
  )
}

export default NotionAuth