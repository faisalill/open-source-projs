import AuthButton from '../Helper/AuthButton'
import { Account } from 'appwrite'
import {SiGitlab} from 'react-icons/si'

const GitlabAuth  = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='gitlab' btnClassName='gitlab-auth-btn' displayText='Sign in with Gitlab ' successUrl={successUrl} failureUrl={failureUrl} icon={<SiGitlab className='icon'/> }   />
  )
}

export default GitlabAuth