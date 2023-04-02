import { useState } from 'react'
import {MdEmail} from 'react-icons/md'
import { Account, ID  } from 'appwrite'

const EmailAuth = ({client, redirectURL}) => {
  const [showPopup, setshowPopup] = useState(false)
  const account = new Account(client) 
  return (
    <>
    <button className="email-auth-btn"
    onClick={()=>{
      setshowPopup(!showPopup)
    }}
    ><MdEmail className='icon' /> &nbsp; Sign in with Email
    </button>
    <EmailPromptPopup redirectURL={redirectURL} showPopup={showPopup} setshowPopup={setshowPopup} account={account} />
    </>
  )
}

export default EmailAuth


const EmailPromptPopup = ({showPopup, setshowPopup, account, redirectURL}) =>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return(
    <>
    <div className={showPopup ? 'popup' : 'popup-closed'}
    onClick={()=>{
      setshowPopup(false)
    }}
    >
      <form className='form'
      onClick={(e)=>{
        e.stopPropagation()
      }}
      >
        <label className='label'>Email</label>
        <input className='email' type="email" placeholder="Email" 
        onChange={(e)=>{
          setEmail(e.target.value)
        }
        }
        />
        <label className='label'>Password</label>
        <input className='password' type="password" placeholder="Password" 
        onChange={(e)=>{
          setPassword(e.target.value)
        }
        }
        />
        <button className='submit' type="submit"
        onClick={(e)=>{
          e.preventDefault()
          account.create(
            ID.unique(),
            email, 
            password
          ).then((res)=>{
            account.createEmailSession(email, password)
            .then((res)=>{
            account.createVerification(redirectURL)
            })
          })
        }}
        >Sign in</button>
        </form>
     </div>
    </>
  )
}