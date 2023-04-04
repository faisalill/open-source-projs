import React, {useState, useEffect} from 'react'
import { Client, Account} from 'appwrite'
import { GoogleAuth, FacebookAuth,  GithubAuth,  MicrosoftAuth, AppleAuth, PhoneAuth, AmazonAuth, AuthO, DiscordAuth, SpotifyAuth, TwitchAuth, EmailAuth } from '../Components/index'

const client = new Client()
.setEndpoint(process.env.NEXT_PUBLIC_URL)
.setProject(process.env.NEXT_PUBLIC_ID);

const App = () => {
   let successUrl = 'https://appwrite-ui-helper.vercel.app/'
    let failureUrl = 'https://appwrite-ui-helper.vercel.app/'
  const account = new Account(client)
  const [user, setUser] = useState({name: "Not Logged in", email: "Not Logged in", emailVerification: false, phone: "Not Logged In ", phoneVerification: false})
  const [loading, setLoading] = useState(true)
  const [Refresh, setRefresh] = useState(false)
  useEffect(() => {
    console.log('refresh')
    const promise = account.get();
    promise.then(function (response) {
      setUser(response)
      setLoading(false)
  }, function (error) {
      setLoading(false)
  });
  }, [Refresh])
  return (
    <>
    
    {loading ? <div
    className='info-div'
    ><span class="loader"></span></div>
     : 
     <div
     className='info-div'
     >
    {user && <p>Name: &nbsp;<span className='info'>{user.name}</span></p>}
    {user && <p>Email: &nbsp;<span className='info'>{user.email}</span></p>}
    {user && <p>Phone: &nbsp;<span className='info'>{user.phone}</span></p>}
    {user && <p>Email Verified: &nbsp; <span className='info'>{user.emailVerification ? 'yes' : 'no'}</span></p>}
    {user && <p>Phone Verified: &nbsp;<span className='info'>{user.phoneVerification ? 'yes': 'no'}</span></p>}
    <div >
    <button
    className='sign-out-btn'
    onClick={()=>{
      account.deleteSessions('current').then((res)=>{
        setUser({name: "Not Logged in", email: "Not Logged in", emailVerification: false, phone: "Not Logged In ", phoneVerification: false})
      })
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
    {/* <AppleAuth client={client} redirectURL="http://localhost:5173" /> */}
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