import {FcGoogle} from 'react-icons/fc'
import { Account } from 'appwrite'



const GoogleAuth = ({client, redirectURL}) => {
    const account = new Account(client)    
return (
    <button className='google-auth-btn'
    onClick={()=>{
        account.createOAuth2Session('google', redirectURL)
    }}
    >  <FcGoogle className='icon' /> &nbsp;  Sign in with Google</button>
)
}

export default GoogleAuth   