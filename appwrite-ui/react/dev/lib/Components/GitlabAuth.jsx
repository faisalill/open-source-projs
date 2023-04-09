import AuthButton from '../Helper/AuthButton.jsx'
import {SiGitlab} from 'react-icons/si'
import React from 'react'
const GitlabAuth  = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='gitlab' btnClassName='gitlab-auth-btn' displayText='Sign in with Gitlab ' successUrl={successUrl} failureUrl={failureUrl} icon={<SiGitlab className='icon'/> }   />
  )
}

export default GitlabAuth