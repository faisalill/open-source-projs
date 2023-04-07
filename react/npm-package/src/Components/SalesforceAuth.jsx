import AuthButton from '../Helper/AuthButton.jsx'
import { Account } from 'appwrite'
import {SiSalesforce} from 'react-icons/si'
import React from 'react'
const SalesforceAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='salesforce' btnClassName='salesforce-auth-btn' displayText='Sign in with Salesforce' successUrl={successUrl} failureUrl={failureUrl} icon={<SiSalesforce className='icon'/> }   />
  )
}

export default SalesforceAuth