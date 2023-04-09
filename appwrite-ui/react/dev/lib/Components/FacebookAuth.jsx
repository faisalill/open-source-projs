import {AiFillFacebook} from 'react-icons/ai'
import AuthButton from '../Helper/AuthButton.jsx'
import React from 'react'
const FacebookAuth = ({account, successUrl, failureUrl}) => {
    return(
    // <button className='facebook-auth-btn'
    // onClick={()=>{
    //     account.createOAuth2Session('facebook', successUrl, failureUrl)
    // }}
    // > <AiFillFacebook className='icon' /> &nbsp;   Sign in with Facebook</button>
    <AuthButton account={account} btnClassName='appwriteui-react-facebook-auth-btn' authProvider='facebook' successUrl={successUrl} failureUrl={failureUrl} icon={<AiFillFacebook className='icon' />} displayText='Sign in with Facebook' />
)
}

export default FacebookAuth