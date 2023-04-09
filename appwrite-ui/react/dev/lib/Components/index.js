import GoogleAuth from "./GoogleAuth.jsx";
import FacebookAuth from "./FacebookAuth.jsx";
// import TwitterAuth from "./TwitterAuth";
import GithubAuth from "./GithubAuth.jsx";
import EmailAuth from "./EmailAuth.jsx";
import MicrosoftAuth from "./MicrosoftAuth.jsx";
import AppleAuth from "./AppleAuth.jsx";
import PhoneAuth from "./PhoneAuth.jsx";
import AmazonAuth from "./AmazonAuth.jsx";
import AuthO from "./Auth0.jsx";
import DiscordAuth from "./DiscordAuth.jsx";
import SpotifyAuth from "./SpotifyAuth.jsx";
import TwitchAuth from "./TwitchAuth.jsx";
import AutodeskAuth from "./AutodeskAuth.jsx";
import AuthentikAuth from "./AuthentikAuth.jsx";
import BitbucketAuth from "./BitbucketAuth.jsx";
import BoxAuth from "./BoxAuth.jsx";
import DailymotionAuth from "./DailymotionAuth.jsx";
import DisqusAuth from "./DisqusAuth.jsx";
import DropboxAuth from "./DropboxAuth.jsx";
import EtsyAuth from "./EtsyAuth.jsx";
import GitlabAuth from "./GitlabAuth.jsx";
import LinkedinAuth from "./LinkedinAuth.jsx";
import NotionAuth from "./NotionAuth.jsx";
import OktaAuth from "./OktaAuth.jsx";
import PaypalAuth from "./PaypalAuth.jsx";
import PodioAuth from "./PodioAuth.jsx";
import SalesforceAuth from "./SalesforceAuth.jsx";
import SlackAuth from "./SlackAuth.jsx";
import TradeshiftAuth from "./TradeshiftAuth.jsx";
import WordpressAuth from "./WordpressAuth.jsx";
import YahooAuth from "./YahooAuth.jsx";
import YandexAuth from "./YandexAuth.jsx";
import ZoomAuth from "./ZoomAuth.jsx";
import BitlyAuth from "./BitlyAuth.jsx";  
import StripeAuth from "./StripeAuth.jsx";
import YammerAuth from "./YammerAuth.jsx";
import React from 'react'

const AppwriteAuthComponent = ({authProvider,  successUrl, failureUrl, account}) =>{
  if(authProvider === 'google'){
    return (<GoogleAuth  account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'facebook'){
    return (<FacebookAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  // if(authProvider === 'twitter'){
  //   return (<TwitterAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  // }
  if(authProvider === 'github'){
    return (<GithubAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'email'){
    return (<EmailAuth account={account} successUrl={successUrl} failureUrl={failureUrl} />)
  }
  if(authProvider === 'microsoft'){
    return (<MicrosoftAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'apple'){
    return (<AppleAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'phone'){
    return (<PhoneAuth account={account} successUrl={successUrl} failureUrl={failureUrl} />)
  }
  if(authProvider === 'amazon'){
    return (<AmazonAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'auth0'){
    return (<AuthO account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'discord'){
    return (<DiscordAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'spotify'){
    return (<SpotifyAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'twitch'){
    return (<TwitchAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'autodesk'){
    return (<AutodeskAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'authentik'){
    return (<AuthentikAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'bitbucket'){
    return (<BitbucketAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'box'){
    return (<BoxAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'dailymotion'){
    return (<DailymotionAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'disqus'){
    return (<DisqusAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'dropbox'){
    return (<DropboxAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'etsy'){
    return (<EtsyAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'gitlab'){
    return (<GitlabAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'linkedin'){
    return (<LinkedinAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'notion'){
    return (<NotionAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'okta'){
    return (<OktaAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'paypal'){
    return (<PaypalAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'podio'){
    return (<PodioAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'salesforce'){
    return (<SalesforceAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'slack'){
    return (<SlackAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'tradeshift'){
    return (<TradeshiftAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'wordpress'){
    return (<WordpressAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'yahoo'){
    return (<YahooAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'yandex'){
    return (<YandexAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'zoom'){
    return (<ZoomAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'bitly'){
    return (<BitlyAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'stripe'){
    return (<StripeAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'yammer'){
    return (<YammerAuth account={account} successUrl={successUrl} failureUrl={failureUrl}/>)
  }

}


export {
  AppwriteAuthComponent,
  GoogleAuth,
  FacebookAuth,
  GithubAuth,
  EmailAuth,
  MicrosoftAuth,
  AppleAuth, 
  PhoneAuth,
  AmazonAuth,
  AuthO,
  DiscordAuth,
  SpotifyAuth,
  TwitchAuth,
  AutodeskAuth,
  AuthentikAuth,
  BitbucketAuth,
  BoxAuth,
  DailymotionAuth,
  DisqusAuth,
  DropboxAuth,
  EtsyAuth,
  GitlabAuth,
  LinkedinAuth,
  NotionAuth,
  OktaAuth,
  PaypalAuth,
  PodioAuth,
  SalesforceAuth,
  SlackAuth,
  TradeshiftAuth,
  WordpressAuth,
  YahooAuth,
  YandexAuth,
  ZoomAuth,
  BitlyAuth, 
  StripeAuth,
  YammerAuth
};
