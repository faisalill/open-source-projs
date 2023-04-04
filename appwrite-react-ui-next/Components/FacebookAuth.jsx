import {AiFillFacebook} from 'react-icons/ai'
import { Account } from 'appwrite'

const FacebookAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
    return(
    <button className='facebook-auth-btn'
    onClick={()=>{
        account.createOAuth2Session('facebook', successUrl, failureUrl)
    }}
    > <AiFillFacebook className='icon' /> &nbsp;   Sign in with Facebook</button>
)
}

export default FacebookAuth