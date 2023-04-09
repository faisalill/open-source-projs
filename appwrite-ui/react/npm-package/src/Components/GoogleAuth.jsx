import {FcGoogle} from 'react-icons/fc'
import AuthButton from '../Helper/AuthButton.jsx'
import React from 'react'

const GoogleAuth = ({ successUrl, failureUrl, account }) => {
return (
    // <button className='google-auth-btn'
    // onClick={()=>{
    //     account.createOAuth2Session('google', successUrl, failureUrl)
    // }}
    // >  <FcGoogle className='icon' /> &nbsp;  Sign in with Google</button>
    <AuthButton account={account} btnClassName='google-auth-btn' authProvider='google' successUrl={successUrl} failureUrl={failureUrl} icon={<FcGoogle className='icon' />} displayText='Sign in with Google' />
    )
}

export default GoogleAuth   
   