import React from 'react'
import {SiAuth0} from 'react-icons/si'
import AuthButton from '../Helper/AuthButton.jsx'

const Auth0 = ({account, successUrl, failureUrl}) => {
  return (
    // <button className="auth0-auth-btn"
    // onClick={()=>{
    //     account.createOAuth2Session('auth0', successUrl, failureUrl)
    //     }
    // }
    // ><SiAuth0 className='icon' /> &nbsp; Sign in with Auth0</button>
    <AuthButton account={account} btnClassName='appwriteui-react-auth0-auth-btn' authProvider='auth0' successUrl={successUrl} failureUrl={failureUrl} icon={<SiAuth0 className='icon' />} displayText='Sign in with Auth0' />
    )
}

export default Auth0