import AuthButton from '../Helper/AuthButton.jsx'
import {BsPaypal} from 'react-icons/bs'
import React from 'react'
const PaypalAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='paypal' btnClassName='appwriteui-react-paypal-auth-btn' displayText='Sign in with Paypal' successUrl={successUrl} failureUrl={failureUrl} icon={<BsPaypal className='icon'/> }   />
  )
}

export default PaypalAuth