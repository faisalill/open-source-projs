import {VscGithub} from 'react-icons/vsc'
import { Account } from 'appwrite'
import AuthButton from '../Helper/AuthButton.jsx'
import React from 'react'
const GithubAuth = ({client, successUrl, failureUrl}) => {
const account = new Account(client)
  return (
    // <button className="github-auth-btn"
    // onClick={()=>{
    //   account.createOAuth2Session('github', successUrl, failureUrl)
    // }}
    // ><VscGithub className='icon' /> &nbsp; Sign in with Github</button>
    <AuthButton account={account} btnClassName='github-auth-btn' authProvider='github' successUrl={successUrl} failureUrl={failureUrl} icon={<VscGithub className='icon' />} displayText='Sign in with Github' />
  )
}

export default GithubAuth