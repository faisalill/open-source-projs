import AuthButton from '../Helper/AuthButton'
import { Account } from 'appwrite'
import {BsStripe} from 'react-icons/bs'

const StripeAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='stripe' btnClassName='stripe-auth-btn' displayText='Sign in with Stripe' successUrl={successUrl} failureUrl={failureUrl} icon={<BsStripe className='icon'/> }   />
  )
}

export default StripeAuth