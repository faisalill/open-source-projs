import {AiFillFacebook} from 'react-icons/ai'
import { Account } from 'appwrite'
import AuthButton from '../Helper/AuthButton.jsx'
import React from 'react'
const FacebookAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
    return(
    // <button className='facebook-auth-btn'
    // onClick={()=>{
    //     account.createOAuth2Session('facebook', successUrl, failureUrl)
    // }}
    // > <AiFillFacebook className='icon' /> &nbsp;   Sign in with Facebook</button>
    <AuthButton account={account} btnClassName='facebook-auth-btn' authProvider='facebook' successUrl={successUrl} failureUrl={failureUrl} icon={<AiFillFacebook className='icon' />} displayText='Sign in with Facebook' />
)
}

export default FacebookAuth