import React from 'react'
import {FaTwitch} from 'react-icons/fa'
import { Account } from 'appwrite'


const TwitchAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <button className="twitch-auth-btn"
    onClick={()=>{
        account.createOAuth2Session('twitch', successUrl, failureUrl)
        }
    }
    ><FaTwitch className='icon' /> &nbsp; Sign in with Twitch</button>
  )
}

export default TwitchAuth