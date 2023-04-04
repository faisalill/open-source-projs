import React from 'react'
import {FaSpotify} from 'react-icons/fa'
import { Account } from 'appwrite'

const SpotifyAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <button className="spotify-auth-btn"
    onClick={()=>{
        account.createOAuth2Session('spotify', successUrl, failureUrl)
        }
    }
    ><FaSpotify className='icon' /> &nbsp; Sign in with Spotify</button>
  )
}

export default SpotifyAuth