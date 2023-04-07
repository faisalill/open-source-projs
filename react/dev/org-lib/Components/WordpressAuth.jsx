import AuthButton from '../Helper/AuthButton'
import { Account } from 'appwrite'
import {BsWordpress} from 'react-icons/bs'

const WordpressAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='wordpress' btnClassName='wordpress-auth-btn' displayText='Sign in with Wordpress' successUrl={successUrl} failureUrl={failureUrl} icon={<BsWordpress className='icon'/> }   />
  )
}

export default WordpressAuth