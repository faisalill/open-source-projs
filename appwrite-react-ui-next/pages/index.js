import { Client, Account} from 'appwrite'
import { GoogleAuth, FacebookAuth,  GithubAuth,  MicrosoftAuth, AppleAuth, PhoneAuth, AmazonAuth, AuthO, DiscordAuth, SpotifyAuth, TwitchAuth, EmailAuth } from '../lib/Components/index'
import useAuthUser from '@/lib/Hooks/useAuthUser';
import AutodeskAuth from '@/lib/Components/AutodeskAuth';

const client = new Client()
.setEndpoint(process.env.NEXT_PUBLIC_URL)
.setProject(process.env.NEXT_PUBLIC_ID);
const account = new Account(client);


const App = () => {
  const {user,setUser,  loading, Refresh, setRefresh, setLoading} = useAuthUser(account)
  let deploymentUrl = 'https://appwrite-ui-helper.vercel.app/'
  let successUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' :  deploymentUrl
  let failureUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' :  deploymentUrl


  return (
    <>
    {loading ? <div
    className='info-div'
    ><span className="loader"></span></div>
     : 
     <div
     className='info-div'
     >
    {user && <p>Name: &nbsp;<span className='info'>{user.name ? user.name : "Not Authorized"} </span></p>}
    {user && <p>Email: &nbsp;<span className='info'>{user.email ? user.email : "Not Authorized"}</span></p>}
    {user && <p>Phone: &nbsp;<span className='info'>{user.phone ? user.phone : "Not Authorized" }</span></p>}
    {user && <p>Email Verified: &nbsp; <span className='info'>{user.emailVerification ? 'yes' : 'no'}</span></p>}
    {user && <p>Phone Verified: &nbsp;<span className='info'>{user.phoneVerification ? 'yes': 'no'}</span></p>}
    <div >
    <button
    className='sign-out-btn'
    onClick={()=>{
      user.email || user.phone  || user.name ? 
      account.deleteSessions('current').then((res)=>{
        setUser({name: false, email: false, emailVerification: false, phone: false, phoneVerification: false})
      })
      :
      console.log('No sessions to delete')
    }}
    >Sign Out</button>
     <button
    className='sign-out-btn'
    onClick={()=>{
      setRefresh(!Refresh)
      setLoading(true)
    }}
    >Refresh</button>
    </div>
     </div>  
  }
    <GoogleAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>
    <FacebookAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>
    <GithubAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>
    <AmazonAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>
    <MicrosoftAuth client={client} successUrl={successUrl} failureUrl={failureUrl} />
    <AuthO client={client} successUrl={successUrl} failureUrl={failureUrl}/>
    <DiscordAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>
    <SpotifyAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>
    <TwitchAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>
    <AppleAuth client={client} redirectURL="http://localhost:5173" />
    <AutodeskAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>
    
    <EmailAuth client={client} successUrl={successUrl} failureUrl={failureUrl} Refresh={Refresh} setRefresh={setRefresh} setLoading={setLoading}/>
    <PhoneAuth client={client} successUrl={successUrl} failureUrl={failureUrl} Refresh={Refresh} setRefresh={setRefresh} setLoading={setLoading}/>
    {/* <button
    onClick={()=>{
      const promise = account.get();
      promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error.message); // Failure
    });
    }
    }
    >Check sessions</button> */}
    </>
  )
}

export default App