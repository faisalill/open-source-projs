import React, {useState, useEffect} from 'react'
import {BsMagic} from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'

const MagicurlAuth = ({account, successUrl, failureUrl}) => {
const [showPopup, setshowPopup] = useState(false)
  return (
    <>
    <button className='appwriteui-react-magicurl-auth-btn'
    onClick={()=>{
        setshowPopup(!showPopup)
    }}
    >  {<BsMagic className='icon' />} &nbsp;  <span>&nbsp;Sign in using Magicurl</span>
    </button>
    <MagicurlPromptPopup successUrl={successUrl} failureUrl={failureUrl} showPopup={showPopup} setshowPopup={setshowPopup} account={account} />
    </>
  )
}

export default MagicurlAuth


const MagicurlPromptPopup = ({showPopup, setshowPopup, account, successUrl, failureUrl }) =>{
    const [email, setEmail] = useState('')
    const [showVerificationPopup, setshowVerificationPopup] = useState(false)
    const [id, setId] = useState('')
  const [changeId, setchangeId] = useState(false)
  useEffect(() => {
    setId(uuidv4())
  },[changeId])
return(
<>
<div className={showPopup ? 'appwriteui-react-popup' : 'appwriteui-react-popup-closed'}
    onClick={()=>{
      setshowPopup(false)
    }}
    >
      <form className='appwriteui-react-form'
      onClick={(e)=>{
        e.stopPropagation()
      }}
      > 
        
        <label className='appwriteui-react-label'>Email</label>
        <input title='email-input' className='appwriteui-react-email' type="email" placeholder="Email" 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }
        }
        />
       <button title='pre-verification-submit-button' className='appwriteui-react-submit' type="submit"
        onClick={async (e)=>{
          e.preventDefault()
          try{
            account.createMagicURLSession(id, email)
          .then((res)=>{
          setshowPopup(false)
          setshowVerificationPopup(true)
          setEmail('')
          })
          }
        catch(err){
                window.location.href = failureUrl
        }
        }}
        >Get Verification Link</button>
        </form>
     </div>
        <VerificationPopup changeId={changeId} setchangeId={setchangeId} id={id} showVerificationPopup={showVerificationPopup} setshowVerificationPopup={setshowVerificationPopup} account={account} successUrl={successUrl} failureUrl={failureUrl} />
</>
)
}


const VerificationPopup = ({changeId, setchangeId, id, showVerificationPopup, setshowVerificationPopup,account, successUrl, failureUrl}) =>{
    const [verificationCode, setverificationCode] = useState('')
    return(
      <>
      <div className={showVerificationPopup ? 'appwriteui-react-popup' : 'appwriteui-react-popup-closed'}
      onClick={()=>{
        // setshowVerificationPopup(false)
      }}
      >
        <form className='appwriteui-react-form'
        onClick={(e)=>{
          e.stopPropagation()
        }}
        >
          <label className='appwriteui-react-label'>Verification Link (check your spam inbox too)</label>
          <input title='verification-link-input' className='appwriteui-react-phoneNumber'  placeholder="Paste Verification Link " 
          value={verificationCode}
          onChange={(e)=>{
            setverificationCode(e.target.value)
          }
          }
          />
          <button title='verification-link-submit-button' className='appwriteui-react-submit' type="submit"
          onClick={(e)=>{
            e.preventDefault()
            setshowVerificationPopup(false)
            try{
                account.updateMagicURLSession(verificationCode.split('?')[1].split('&')[0].split('=')[1].toString(), verificationCode.split('?')[1].split('&')[1].split('=')[1].toString()).then((res)=>{
                    setverificationCode('')
                    window.location.href = successUrl
                })
            }
            catch(err){
                window.location.href = failureUrl
            } 
        }}
          >Verify</button>
          </form>
       </div>
      </>
    )
  }