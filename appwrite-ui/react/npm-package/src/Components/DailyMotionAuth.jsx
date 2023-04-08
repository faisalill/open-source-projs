import AuthButton from '../Helper/AuthButton.jsx'
import { Account } from 'appwrite'
import {SiDailymotion} from 'react-icons/si'
import React from 'react'
const DailyMotionAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='dailymotion' btnClassName='dailymotion-auth-btn' displayText='Sign In with Dailymotion' successUrl={successUrl} failureUrl={failureUrl} icon={<SiDailymotion className='icon'/> }   />
  )
}

export default DailyMotionAuth