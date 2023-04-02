import {MdEmail} from 'react-icons/md'
import { Account, ID } from 'appwrite'

const EmailAuth = ({client, redirectURL}) => {
  const account = new Account(client) 
  return (
    <button className="email-auth-btn"
    onClick={()=>{
      account.create(
        ID.unique(),
        'check@email.com', 
        'password'
      )
    }}
    ><MdEmail className='icon' /> &nbsp; Sign in with Email</button>
  )
}

export default EmailAuth