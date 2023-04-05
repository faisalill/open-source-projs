import { Account } from 'appwrite'
import {FaAmazon} from 'react-icons/fa'
import AuthButton from '../Helper/AuthButton'

const AmazonAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    // <button className="amazon-auth-btn"
    // onClick={()=>{
    //     account.createOAuth2Session( 'amazon', successUrl, failureUrl)
    //     }
    // }
    // ><FaAmazon className='icon' /> &nbsp; Sign in with Amazon</button>
    <AuthButton account={account} btnClassName='amazon-auth-btn' authProvider='amazon' successUrl={successUrl} failureUrl={failureUrl} icon={<FaAmazon className='icon' />} displayText='Sign in with Amazon' />
  )
}

export default AmazonAuth