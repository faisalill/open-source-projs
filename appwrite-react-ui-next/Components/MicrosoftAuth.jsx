import { Account } from 'appwrite'


const MicrosoftAuth = ({client, redirectURL}) => {
  const account = new Account(client)
  return (
    <button className="microsoft-auth-btn"
    onClick={async ()=>{
     await account.createOAuth2Session('microsoft', redirectURL, redirectURL)
    }}
    aria-label='Sign in with Microsoft'
    ><MicrosoftSvg className='icon' /> &nbsp; Sign in with Microsoft</button>
  )
}

export default MicrosoftAuth


function MicrosoftSvg (){
  return (<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><title>MS-SymbolLockup</title><rect x="1" y="1" width="9" height="9" fill="#f25022"/><rect x="1" y="11" width="9" height="9" fill="#00a4ef"/><rect x="11" y="1" width="9" height="9" fill="#7fba00"/><rect x="11" y="11" width="9" height="9" fill="#ffb900"/></svg>)
}