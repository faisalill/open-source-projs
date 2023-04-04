import React from 'react'
import {SiAuth0} from 'react-icons/si'
import { Account } from 'appwrite'
const AuthO = ({client , successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <button className="auth0-auth-btn"
    onClick={()=>{
        account.createOAuth2Session('auth0', successUrl, failureUrl)
        }
    }
    ><SiAuth0 className='icon' /> &nbsp; Sign in with Auth0</button>
  )
}

export default AuthO