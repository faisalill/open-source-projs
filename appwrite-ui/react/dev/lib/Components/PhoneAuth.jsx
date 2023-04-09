import {useState, useEffect} from 'react'
import {FaPhoneAlt} from 'react-icons/fa'
import {v4 as uuidv4} from 'uuid'
import React from 'react'
const PhoneAuth = ({account,  successUrl, failureUrl}) => {
  const [showPopup, setshowPopup] = useState(false)
  return (
    <>
    <button title='phone-auth-button' className="phone-auth-btn"
    onClick={()=>{
      setshowPopup(!showPopup)
    }}
    ><FaPhoneAlt className='icon' /> &nbsp; Sign in with Phone</button>
    <PhonePromptPopup successUrl={successUrl} failureUrl={failureUrl} showPopup={showPopup} setshowPopup={setshowPopup} account={account} />
    </>
  )
}

export default PhoneAuth


const PhonePromptPopup = ({showPopup, setshowPopup, account,successUrl, failureUrl}) =>{
 const [phone, setPhone] = useState('')
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
        <label className='label'>Phone Number</label>
        <input title='phone-number-input' className='phoneNumber'  placeholder="Country Code + Phone Number" 
        value={phone}
        onChange={(e)=>{
          setPhone(e.target.value)
        }
        }
        />
        <button title='phone-number-submit-button' className='submit' type="submit"
        onClick={(e)=>{
          e.preventDefault()
          setPhone('')
          const promise = account.createPhoneSession(id, phone)
          promise.then((res)=>{
            setshowVerificationPopup(true)
            setshowPopup(false)
          })
        }}
        >Get Verification Code</button>
        </form>
     </div>
      <VerificationPopup successUrl={successUrl} failureUrl={failureUrl} changeId={changeId} setchangeId={setchangeId} id={id} showVerificationPopup={showVerificationPopup} setshowVerificationPopup={setshowVerificationPopup} account={account}  />
    </>
  )
}


const VerificationPopup = ({changeId, setchangeId, id, showVerificationPopup, setshowVerificationPopup,account,  successUrl, failureUrl}) =>{
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
        <label className='label'>Verification Code</label>
        <input title='verification-input' className='phoneNumber'  placeholder="Enter Verification Code" 
        value={verificationCode}
        onChange={(e)=>{
          setverificationCode(e.target.value)
        }
        }
        />
        <button title='verification-submit-button' className='submit' type="submit"
        onClick={(e)=>{
          e.preventDefault()
          setverificationCode('')
          const promise = account.updatePhoneSession(id, verificationCode)
          promise.then((res)=>{
            // console.log(res)
            setchangeId(!changeId)
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