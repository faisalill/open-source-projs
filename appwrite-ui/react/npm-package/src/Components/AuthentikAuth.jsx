import AuthButton from '../Helper/AuthButton.jsx'
import React from 'react'
const AuthentikAuth = ({account, successUrl, failureUrl}) => {
  return (
    <AuthButton account={account} authProvider='authentik' btnClassName='authentik-auth-btn' displayText='Sign in with Authentik' successUrl={successUrl} failureUrl={failureUrl} icon={<AuthenticSvg /> }   />
  )
}

export default AuthentikAuth


function AuthenticSvg ()  {
    return (<svg className='icon' viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><g fill="#fd4b2d"><path d="m535.5 293.4h31.9v91h-31.9z"/><path d="m618.3 289.6h31.9v71.1h-31.9z"/><path d="m154.1 393.8c-42.562 0-81.726 23.16-102.041 60.5h-.059c-42.3 73.8 16.3 173.4 102.1 171.1 66.5 0 121.3-98.5 121.3-116 0-7.7-10.8-31.3-28.5-55-22.3-30.1-55.7-60.6-92.8-60.6zm-6.625 42.9c14.825-.75 29.825 4.4 42.525 17.7 16.8 15.8 30.7 34.4 41.2 54.9-74.4 155.8-205 23-125-55h-.075c11.977-10.24 26.575-16.853 41.35-17.6z"/><path d="m948.1 292.3v411.4c-.2 78.9-64.2 142.8-143.1 142.7h-60.6v-140h-289.7v140h-60.7c-78.8 0-142.7-63.8-142.9-142.7v-129.5h459.3v-247.3h-221.7v138.9h-237.6v-173.5q0-8.3.9-16.5 1.1-9.7 3.6-19.2c.5-2 1.1-4 1.7-6q.2-.8.4-1.5c.4-1.1.7-2 1-2.9.4-1 .7-2 1.1-3 .3-.9.8-2.2 1.2-3.3.5-1 .9-2.1 1.4-3.2 3.5-8.4 7.9-16.4 12.9-24v-.3c1.4-1.8 2.7-3.7 4.1-5.6s2.3-3 3.5-4.5 2.9-3.4 4.3-5c1.4-1.7 2.8-3.2 4.3-4.7q1.1-1.3 2.5-2.4c5.2-5.2 10.9-10 16.9-14.3 1.6-1.1 3.3-2.2 5-3.3 1.7-1.2 3.9-2.5 5.9-3.7q5.6-3.3 11.5-6l3.7-1.7q8.2-3.6 16.7-6c2.3-.7 4.4-1.3 6.7-1.8q1.6-.5 3.3-.7 9.5-2.1 19.3-2.9h432.7q9.8.8 19.4 2.9c1.1 0 2.1.4 3.2.7 2.3.5 4.5 1.1 6.7 1.8q8.5 2.4 16.7 6l3.7 1.7q6 2.7 11.5 6 3 1.8 5.9 3.7c1.8 1.2 3.4 2.2 5 3.3 6.9 5.1 13.5 10.7 19.5 16.8q2.3 2.3 4.4 4.7c1.4 1.6 2.8 3.3 4.2 5l3.5 4.6c1.4 1.8 2.7 3.7 4.1 5.6v.2c5 7.6 9.4 15.7 12.9 24.1l1.4 3.2 1.2 3.2c.4 1 .7 2 1.1 3l1 2.9c0 .5.3 1 .4 1.6.6 1.9 1.2 4 1.7 6q2.5 9.5 3.6 19.2 1.1 8.1 1.3 16.3z"/></g></svg>)
}