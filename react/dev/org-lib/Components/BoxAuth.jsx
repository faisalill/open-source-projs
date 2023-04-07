import AuthButton from '../Helper/AuthButton'
import { Account } from 'appwrite'
import {SiBox} from 'react-icons/si'

const BoxAuth  = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='box' btnClassName='box-auth-btn' displayText='Sign in with Box' successUrl={successUrl} failureUrl={failureUrl} icon={<SiBox className='icon'/> }   />
  )
}

export default BoxAuth