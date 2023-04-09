import AuthButton from '../Helper/AuthButton.jsx'
import {SiDailymotion} from 'react-icons/si'
import React from 'react'
const DailymotionAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='dailymotion' btnClassName='appwriteui-react-dailymotion-auth-btn' displayText='Sign In with Dailymotion' successUrl={successUrl} failureUrl={failureUrl} icon={<SiDailymotion className='icon'/> }   />
  )
}

export default DailymotionAuth