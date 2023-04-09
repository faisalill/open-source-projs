import AuthButton from '../Helper/AuthButton.jsx'
import {BsStripe} from 'react-icons/bs'
import React from 'react'
const StripeAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='stripe' btnClassName='appwriteui-react-stripe-auth-btn' displayText='Sign in with Stripe' successUrl={successUrl} failureUrl={failureUrl} icon={<BsStripe className='icon'/> }   />
  )
}

export default StripeAuth