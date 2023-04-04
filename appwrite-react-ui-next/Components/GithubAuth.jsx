import {VscGithub} from 'react-icons/vsc'
import { Account } from 'appwrite'

const GithubAuth = ({client, redirectURL}) => {
const account = new Account(client)
  return (
    <button className="github-auth-btn"
    onClick={()=>{
      account.createOAuth2Session('github', redirectURL)
    }}
    ><VscGithub className='icon' /> &nbsp; Sign in with Github</button>
  )
}

export default GithubAuth