import React from 'react'
import {FaDiscord} from 'react-icons/fa'
import AuthButton from '../Helper/AuthButton.jsx'

const DiscordAuth = ({account , successUrl, failureUrl}) => {
    return (
    // <button className="discord-auth-btn"
    // onClick={()=>{
    //     account.createOAuth2Session('discord', successUrl, failureUrl)
    //     }
    // }
    // ><FaDiscord className='icon' /> &nbsp; Sign in with Discord</button>
    <AuthButton account={account} btnClassName='appwriteui-react-discord-auth-btn' authProvider='discord' successUrl={successUrl} failureUrl={failureUrl} icon={<FaDiscord className='icon' />} displayText='Sign in with Discord' />
    )
}

export default DiscordAuth