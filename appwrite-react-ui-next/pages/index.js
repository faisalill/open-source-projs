import React from 'react'
import { Client, Account} from 'appwrite'
import { GoogleAuth, FacebookAuth,  GithubAuth,  MicrosoftAuth, AppleAuth, PhoneAuth, AmazonAuth, AuthO, DiscordAuth, SpotifyAuth, TwitchAuth, EmailAuth } from '../Components/index'

const client = new Client()
.setEndpoint(process.env.NEXT_PUBLIC_URL)
.setProject(process.env.NEXT_PUBLIC_ID);
const account = new Account(client)

const App = () => {
   let successUrl = 'http://localhost:3000/'
    let failureUrl = 'http://localhost:3000/'
  return (
    <>
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
    <EmailAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>
    <PhoneAuth client={client} successUrl={successUrl} failureUrl={failureUrl} />
    <button
    onClick={()=>{
      account.deleteSessions('current')
    }}
    >sign Out</button>
    <button
    onClick={()=>{
      const promise = account.get();
      promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error.message); // Failure
    });
    }
    }
    >Check sessions</button>
    </>
  )
}

export default App