import AuthButton from '../Helper/AuthButton.jsx'
import {SiSalesforce} from 'react-icons/si'
import React from 'react'
const SalesforceAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='salesforce' btnClassName='appwriteui-react-salesforce-auth-btn' displayText='Sign in with Salesforce' successUrl={successUrl} failureUrl={failureUrl} icon={<SiSalesforce className='icon'/> }   />
  )
}

export default SalesforceAuth