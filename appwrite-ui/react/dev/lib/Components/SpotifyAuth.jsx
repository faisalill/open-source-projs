import React from 'react'
import {FaSpotify} from 'react-icons/fa'
import { Account } from 'appwrite'
import AuthButton from '../Helper/AuthButton.jsx'

const SpotifyAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    // <button className="spotify-auth-btn"
    // onClick={()=>{
    //     account.createOAuth2Session('spotify', successUrl, failureUrl)
    //     }
    // }
    // ><FaSpotify className='icon' /> &nbsp; Sign in with Spotify</button>
    <AuthButton account={account} btnClassName='spotify-auth-btn' authProvider='spotify' successUrl={successUrl} failureUrl={failureUrl} icon={<FaSpotify className='icon' />} displayText='Sign in with Spotify' />
    )
}

export default SpotifyAuth