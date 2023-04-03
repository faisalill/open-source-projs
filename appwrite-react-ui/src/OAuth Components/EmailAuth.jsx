import { useEffect, useState } from 'react'
import {MdEmail} from 'react-icons/md'
import { Account } from 'appwrite'
import { v4 as uuidv4 } from 'uuid'

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
  const [id, setId] = useState('')
  const [changeId, setchangeId] = useState(false)
  const [showVerificationPopup, setshowVerificationPopup] = useState(false)
  useEffect(() => {
    setId(uuidv4())
  },[changeId])
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
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }
        }
        />
        <label className='label'>Password</label>
        <input className='password' type="password" placeholder="Password" 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }
        }
        />
        <button className='submit' type="submit"
        onClick={async (e)=>{
          e.preventDefault()
          setshowPopup(false)
          setshowVerificationPopup(true)
          setEmail('')
          setPassword('')
          account.create(
            id,
            email, 
            password
          ).then((res)=>{
            account.createEmailSession(email, password)
            .then((res)=>{
            account.createVerification(redirectURL)
            })
          })
        }}
        >Get Verification Link</button>
        </form>
     </div>
     <VerificationPopup changeId={changeId} setchangeId={setchangeId} id={id} showVerificationPopup={showVerificationPopup} setshowVerificationPopup={setshowVerificationPopup} account={account} />
    </>
  )
}


const VerificationPopup = ({changeId, setchangeId, id, showVerificationPopup, setshowVerificationPopup,account}) =>{
  const [verificationCode, setverificationCode] = useState('')
  return(
    <>
    <div className={showVerificationPopup ? 'popup' : 'popup-closed'}
    onClick={()=>{
      // setshowVerificationPopup(false)
    }}
    >
      <form className='form'
      onClick={(e)=>{
        e.stopPropagation()
      }}
      >
        <label className='label'>Verification Link (check your mail inbox)</label>
        <input className='phoneNumber'  placeholder="Enter Verification Link " 
        value={verificationCode}
        onChange={(e)=>{
          setverificationCode(e.target.value)
        }
        }
        />
        <button className='submit' type="submit"
        onClick={(e)=>{
          e.preventDefault()
          setshowVerificationPopup(false)
          // console.log(verificationCode.split('?')[1].split('&')[0].split('=')[1].toString(), verificationCode.split('?')[1].split('&')[1].split('=')[1].toString())
          const promise = account.updateVerification(verificationCode.split('?')[1].split('&')[0].split('=')[1], verificationCode.split('?')[1].split('&')[1].split('=')[1].toString())
          promise.then((res)=>{
            setchangeId(!changeId)
            setverificationCode('')
            setshowVerificationPopup(false)
          }
          )
        }}
        >Verify</button>
        </form>
     </div>
    </>
  )
}