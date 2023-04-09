import AuthButton from '../Helper/AuthButton.jsx'
import {BsDropbox} from 'react-icons/bs'
import React from 'react'
const DropboxAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='dropbox' btnClassName='dropbox-auth-btn' displayText='Sign in with Dropbox' successUrl={successUrl} failureUrl={failureUrl} icon={<BsDropbox className='icon'/> }   />
  )
}

export default DropboxAuth