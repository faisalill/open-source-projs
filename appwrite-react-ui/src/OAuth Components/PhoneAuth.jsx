import {useState, useEffect} from 'react'
import {FaPhoneAlt} from 'react-icons/fa'
import { Account } from 'appwrite'
import {v4 as uuidv4} from 'uuid'

const PhoneAuth = ({client, redirectURL}) => {
  const [showPopup, setshowPopup] = useState(false)
  const account = new Account(client)
  return (
    <>
    <button className="phone-auth-btn"
    onClick={()=>{
      setshowPopup(!showPopup)
    }}
    ><FaPhoneAlt className='icon' /> &nbsp; Sign in with Phone</button>
    <PhonePromptPopup showPopup={showPopup} setshowPopup={setshowPopup} account={account} />
    </>
  )
}

export default PhoneAuth


const PhonePromptPopup = ({showPopup, setshowPopup, account, redirectURL}) =>{
 const [phone, setPhone] = useState('')
  const [id, setId] = useState('')
  const [showVerificationPopup, setshowVerificationPopup] = useState(false)
  useEffect(() => {
    setId(uuidv4())
  },[])
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
        <input className='phoneNumber'  placeholder="Country Code + Phone Number" 
        value={phone}
        onChange={(e)=>{
          setPhone(e.target.value)
        }
        }
        />
        <button className='submit' type="submit"
        onClick={(e)=>{
          e.preventDefault()
          setPhone('')
          console.log(id)
          const promise = account.createPhoneSession(id, phone)
          promise.then((res)=>{
            setshowVerificationPopup(true)
            setshowPopup(false)
          })
        }}
        >Get Verification Code</button>
        </form>
     </div>
      <VerificationPopup id={id} showVerificationPopup={showVerificationPopup} setshowVerificationPopup={setshowVerificationPopup} account={account}  />
    </>
  )
}


const VerificationPopup = ({id, showVerificationPopup, setshowVerificationPopup,account}) =>{
  const [verificationCode, setverificationCode] = useState('')
  return(
    <>
    <div className={showVerificationPopup ? 'popup' : 'popup-closed'}
    onClick={()=>{
      setshowVerificationPopup(false)
    }}
    >
      <form className='form'
      onClick={(e)=>{
        e.stopPropagation()
      }}
      >
        <label className='label'>Verification Code</label>
        <input className='phoneNumber'  placeholder="Enter Verification Code" 
        value={verificationCode}
        onChange={(e)=>{
          setverificationCode(e.target.value)
        }
        }
        />
        <button className='submit' type="submit"
        onClick={(e)=>{
          e.preventDefault()
          setverificationCode('')
          console.log(id)
          const promise = account.updatePhoneSession(id, verificationCode)
          promise.then((res)=>{
            console.log(res)
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