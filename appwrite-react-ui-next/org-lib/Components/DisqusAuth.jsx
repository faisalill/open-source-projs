import AuthButton from '../Helper/AuthButton'
import { Account } from 'appwrite'
import {SiDisqus} from 'react-icons/si'

const DisqusAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='disqus' btnClassName='disqus-auth-btn' displayText='Sign in with Disqus ' successUrl={successUrl} failureUrl={failureUrl} icon={<SiDisqus className='icon'/> }   />
  )
}

export default DisqusAuth