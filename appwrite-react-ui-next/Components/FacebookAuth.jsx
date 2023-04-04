import {AiFillFacebook} from 'react-icons/ai'
import { Account } from 'appwrite'

const FacebookAuth = ({client, redirectURL}) => {
    const account = new Account(client)
    return(
    <button className='facebook-auth-btn'
    onClick={()=>{
        account.createOAuth2Session('facebook', redirectURL)
    }}
    > <AiFillFacebook className='icon' /> &nbsp;   Sign in with Facebook</button>
)
}

export default FacebookAuth