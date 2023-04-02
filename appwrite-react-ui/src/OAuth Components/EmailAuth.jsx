import {MdEmail} from 'react-icons/md'
import { Account, ID  } from 'appwrite'

const EmailAuth = ({client, redirectURL}) => {
  const account = new Account(client) 
  return (
    <button className="email-auth-btn"
    onClick={()=>{
     const accountCreate = account.create(
        ID.unique(),
        'ucantseemej@gmail.com',
        'Jhon8181#'
      )
      accountCreate.then((res)=>{
        account.createEmailSession('ucantseemej@gmail.com', 'Jhon8181#')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
      })
    }}
    ><MdEmail className='icon' /> &nbsp; Sign in with Email</button>
  )
}

export default EmailAuth