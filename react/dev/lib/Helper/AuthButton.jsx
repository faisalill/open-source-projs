import React from 'react'
const AuthButton = ({account, btnClassName,authProvider,successUrl, failureUrl, icon, displayText }) => {
  return (
    <button className={btnClassName}
    onClick={()=>{
        account.createOAuth2Session(authProvider, successUrl, failureUrl)
    }}
    >  {icon} &nbsp;  <span>&nbsp;{displayText}</span></button>
  )
}

export default AuthButton