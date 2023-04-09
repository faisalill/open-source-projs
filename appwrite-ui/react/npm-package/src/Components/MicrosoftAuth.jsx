import AuthButton from '../Helper/AuthButton.jsx'
import React from 'react'
const MicrosoftAuth = ({account, successUrl, failureUrl}) => {
  return (
    // <button className="microsoft-auth-btn"
    // onClick={ ()=>{
    //  account.createOAuth2Session('microsoft',successUrl, failureUrl)
    // }}
    // aria-label='Sign in with Microsoft'
    // ><MicrosoftSvg className='icon' /> &nbsp; Sign in with Microsoft</button>
    <AuthButton account={account} btnClassName='microsoft-auth-btn' authProvider='microsoft' successUrl={successUrl} failureUrl={failureUrl} icon={<MicrosoftSvg className='icon' />} displayText='Sign in with Microsoft' />
    )
}

export default MicrosoftAuth


function MicrosoftSvg (){
  return (<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><title>MS-SymbolLockup</title><rect x="1" y="1" width="9" height="9" fill="#f25022"/><rect x="1" y="11" width="9" height="9" fill="#00a4ef"/><rect x="11" y="1" width="9" height="9" fill="#7fba00"/><rect x="11" y="11" width="9" height="9" fill="#ffb900"/></svg>)
}