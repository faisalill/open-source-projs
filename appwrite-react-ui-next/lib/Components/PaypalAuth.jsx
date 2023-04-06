import AuthButton from '../Helper/AuthButton'
import { Account } from 'appwrite'
import {BsPaypal} from 'react-icons/bs'

const PaypalAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='paypal' btnClassName='paypal-auth-btn' displayText='Sign in with Paypal' successUrl={successUrl} failureUrl={failureUrl} icon={<BsPaypal className='icon'/> }   />
  )
}

export default PaypalAuth