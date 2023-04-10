import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs'

const AnonymousAuth = ({account, successUrl, failureUrl}) => {
  return (
    <button className='appwriteui-react-anonymous-auth-btn'
    onClick={()=>{
        try{
            account.createAnonymousSession().then((res)=>{
                console.log(res)
                window.location.href = successUrl
            })
        }
        catch(err){
            window.location.href = failureUrl
        }
    }}
    >  {<BsFillPersonFill className='icon' />} &nbsp;  <span>&nbsp;Sign in Anonymously</span></button>
  )
}

export default AnonymousAuth