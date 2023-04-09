import { useEffect, useState } from 'react'
import {MdEmail} from 'react-icons/md'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'
import React from 'react'
const EmailAuth = ({account, successUrl, failureUrl}) => {
  const [showPopup, setshowPopup] = useState(false)
  return (
    <>
    <button className="email-auth-btn"
    onClick={()=>{
      setshowPopup(!showPopup)
    }}
    ><MdEmail className='icon' /> &nbsp; Sign in with Email
    </button>
    <EmailPromptPopup successUrl={successUrl} failureUrl={failureUrl} showPopup={showPopup} setshowPopup={setshowPopup} account={account} />
    </>
  )
}

export default EmailAuth


const EmailPromptPopup = ({showPopup, setshowPopup, account, successUrl, failureUrl }) =>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [id, setId] = useState('')
  const [changeId, setchangeId] = useState(false)
  const [showPassword, setshowPassword] = useState(false)
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
        <input title='email-input' className='email' type="email" placeholder="Email" 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }
        }
        />
        <label className='label'>Password</label>
        <div className='password-input-wrapper'>
        <input title='password-input' className='password' type={showPassword ? "text" : "password"} placeholder="Password" 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }
        }
        />
        {showPassword ? 
        <AiFillEyeInvisible title='show-hide-password-button' className='show-password'
        onClick={()=>{
         setshowPassword(!showPassword)
        }}
       />
        : <AiFillEye title='show-hide-password-button' className='show-password'
         onClick={()=>{
          setshowPassword(!showPassword)
         }}
        />}
        </div>
        <button title='pre-verification-submit-button' className='submit' type="submit"
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
            account.createVerification(successUrl, failureUrl)
            })
          })
        }}
        >Get Verification Link</button>
        </form>
     </div>
     <VerificationPopup successUrl={successUrl} failureUrl={failureUrl} changeId={changeId} setchangeId={setchangeId} id={id} showVerificationPopup={showVerificationPopup} setshowVerificationPopup={setshowVerificationPopup} account={account} />
    </>
  )
}


const VerificationPopup = ({changeId, setchangeId, id, showVerificationPopup, setshowVerificationPopup,account, successUrl, failureUrl}) =>{
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
        <label className='label'>Verification Link (check your spam inbox too)</label>
        <input title='verification-link-input' className='phoneNumber'  placeholder="Paste Verification Link " 
        value={verificationCode}
        onChange={(e)=>{
          setverificationCode(e.target.value)
        }
        }
        />
        <button title='verification-link-submit-button' className='submit' type="submit"
        onClick={(e)=>{
          e.preventDefault()
          setshowVerificationPopup(false)
          // console.log(verificationCode.split('?')[1].split('&')[0].split('=')[1].toString(), verificationCode.split('?')[1].split('&')[1].split('=')[1].toString())
          const promise = account.updateVerification(verificationCode.split('?')[1].split('&')[0].split('=')[1], verificationCode.split('?')[1].split('&')[1].split('=')[1].toString())
          promise.then((res)=>{
            setchangeId(!changeId)
            setverificationCode('')
            setshowVerificationPopup(false)
            window.location.href = successUrl;
          }
          )
          promise.catch((err)=>{
            window.location.href = failureUrl;
          })
        }}
        >Verify</button>
        </form>
     </div>
    </>
  )
}