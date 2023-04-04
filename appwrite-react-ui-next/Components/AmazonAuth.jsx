import { Account } from 'appwrite'
import {FaAmazon} from 'react-icons/fa'

const AmazonAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <button className="amazon-auth-btn"
    onClick={()=>{
        account.createOAuth2Session( 'amazon', successUrl, failureUrl)
        }
    }
    ><FaAmazon className='icon' /> &nbsp; Sign in with Amazon</button>
  )
}

export default AmazonAuth