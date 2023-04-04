import React from 'react'
import {FaDiscord} from 'react-icons/fa'
import { Account } from 'appwrite'

const DiscordAuth = ({client , redirectURL}) => {
    const account = new Account(client)
    return (
    <button className="discord-auth-btn"
    onClick={()=>{
        account.createOAuth2Session('discord', redirectURL)
        }
    }
    ><FaDiscord className='icon' /> &nbsp; Sign in with Discord</button>
  )
}

export default DiscordAuth