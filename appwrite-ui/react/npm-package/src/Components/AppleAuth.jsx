import React from 'react'
import {AiFillApple} from 'react-icons/ai'
import AuthButton from '../Helper/AuthButton.jsx'

const AppleAuth = ({account, successUrl, failureUrl}) => {
  return (
    // <button className="apple-auth-btn"><AiFillApple className='icon' /> &nbsp; Sign in with Apple</button>
    <AuthButton account={account} successUrl={successUrl} failureUrl={failureUrl} authProvider='apple' btnClassName='appwriteui-react-apple-auth-btn' displayText='Sign In with Apple' icon={<AiFillApple className='icon'/> } />
    )
}

export default AppleAuth