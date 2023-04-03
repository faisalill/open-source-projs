import React, {useEffect} from 'react'
import { Client, Account} from 'appwrite'
import { GoogleAuth, FacebookAuth,  GithubAuth,  MicrosoftAuth, AppleAuth, PhoneAuth, AmazonAuth, AuthO, DiscordAuth, SpotifyAuth, TwitchAuth } from './OAuth Components'
const client = new Client()
.setEndpoint('http://localhost:80/v1') // Your API Endpoint
.setProject('642875d37aa84cef123e') // Your project ID

const account = new Account(client)
const App = () => {
  // useEffect(() => {
//     const promise = account.get();
// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });
  // } ,[])
  return (
    <>
    <GoogleAuth client={client} redirectURL="http://localhost:5173"/>
    <FacebookAuth client={client} redirectURL="http://localhost:5173"/>
    <GithubAuth client={client} redirectURL="http://localhost:5173"/>
    <AmazonAuth client={client} redirectURL="http://localhost:5173"/>
    <MicrosoftAuth client={client} redirectURL="http://localhost:5173" />
    <AuthO client={client} redirectURL="http://localhost:5173" />
    <DiscordAuth client={client} redirectURL="http://localhost:5173" />
    <SpotifyAuth client={client} redirectURL="http://localhost:5173"/>
    <TwitchAuth client={client} redirectURL="http://localhost:5173" />
    <AppleAuth client={client} redirectURL="http://localhost:5173" />
    <PhoneAuth client={client} redirectURL="http://localhost:5173" />
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