import React from 'react'
import {AiFillApple} from 'react-icons/ai'
import AuthButton from '../Helper/AuthButton'

const AppleAuth = () => {
  return (
    // <button className="apple-auth-btn"><AiFillApple className='icon' /> &nbsp; Sign in with Apple</button>
    <AuthButton authProvider='apple' btnClassName='apple-auth-btn' displayText='Sign In with Apple' icon={<AiFillApple className='icon'/> } />
    )
}

export default AppleAuth