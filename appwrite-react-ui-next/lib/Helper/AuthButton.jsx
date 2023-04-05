
const AuthButton = ({account, btnClassName,authProvider,successUrl, failureUrl, icon, displayText }) => {
  return (
    <button className={btnClassName}
    onClick={()=>{
        account.createOAuth2Session(authProvider, successUrl, failureUrl)
    }}
    >  {icon} &nbsp;  {displayText}</button>
  )
}

export default AuthButton