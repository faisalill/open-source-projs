import AuthButton from '../Helper/AuthButton.jsx'
import {TbBrandZoom} from 'react-icons/tb'
import React from 'react'
const ZoomAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='zoom' btnClassName='appwriteui-react-zoom-auth-btn' displayText='Sign in with Zoom' successUrl={successUrl} failureUrl={failureUrl} icon={<TbBrandZoom className='icon'/> }   />
  )
}

export default ZoomAuth