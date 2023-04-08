import GoogleAuth from "./GoogleAuth.jsx";
import FacebookAuth from "./FacebookAuth.jsx";
// import TwitterAuth from "./TwitterAuth";
import GithubAuth from "./GithubAuth.jsx";
import EmailAuth from "./EmailAuth.jsx";
import MicrosoftAuth from "./MicrosoftAuth.jsx";
import AppleAuth from "./AppleAuth.jsx";
import PhoneAuth from "./PhoneAuth.jsx";
import AmazonAuth from "./AmazonAuth.jsx";
import AuthO from "./AuthO.jsx";
import DiscordAuth from "./DiscordAuth.jsx";
import SpotifyAuth from "./SpotifyAuth.jsx";
import TwitchAuth from "./TwitchAuth.jsx";
import AutodeskAuth from "./AutodeskAuth.jsx";
import AuthentikAuth from "./AuthentikAuth.jsx";
import BitBucketAuth from "./BitBucketAuth.jsx";
import BoxAuth from "./BoxAuth.jsx";
import DailyMotionAuth from "./DailyMotionAuth.jsx";
import DisqusAuth from "./DisqusAuth.jsx";
import DropBoxAuth from "./DropBoxAuth.jsx";
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

const AppwriteAuthComponent = ({authProvider, client, successUrl, failureUrl, Refresh, setRefresh, setLoading}) =>{
  if(authProvider === 'google'){
    return (<GoogleAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'facebook'){
    return (<FacebookAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  // if(authProvider === 'twitter'){
  //   return (<TwitterAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  // }
  if(authProvider === 'github'){
    return (<GithubAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'email'){
    return (<EmailAuth client={client} successUrl={successUrl} failureUrl={failureUrl} Refresh={Refresh} setRefresh={setRefresh} setLoading={setLoading}/>)
  }
  if(authProvider === 'microsoft'){
    return (<MicrosoftAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'apple'){
    return (<AppleAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'phone'){
    return (<PhoneAuth client={client} successUrl={successUrl} failureUrl={failureUrl} Refresh={Refresh} setRefresh={setRefresh} setLoading={setLoading}/>)
  }
  if(authProvider === 'amazon'){
    return (<AmazonAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'auth0'){
    return (<AuthO client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'discord'){
    return (<DiscordAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'spotify'){
    return (<SpotifyAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'twitch'){
    return (<TwitchAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'autodesk'){
    return (<AutodeskAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'authentik'){
    return (<AuthentikAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'bitbucket'){
    return (<BitBucketAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'box'){
    return (<BoxAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'dailymotion'){
    return (<DailyMotionAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'disqus'){
    return (<DisqusAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'dropbox'){
    return (<DropBoxAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'etsy'){
    return (<EtsyAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'gitlab'){
    return (<GitlabAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'linkedin'){
    return (<LinkedinAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'notion'){
    return (<NotionAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'okta'){
    return (<OktaAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'paypal'){
    return (<PaypalAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'podio'){
    return (<PodioAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'salesforce'){
    return (<SalesforceAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'slack'){
    return (<SlackAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'tradeshift'){
    return (<TradeshiftAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'wordpress'){
    return (<WordpressAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'yahoo'){
    return (<YahooAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'yandex'){
    return (<YandexAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'zoom'){
    return (<ZoomAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'bitly'){
    return (<BitlyAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'stripe'){
    return (<StripeAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }
  if(authProvider === 'yammer'){
    return (<YammerAuth client={client} successUrl={successUrl} failureUrl={failureUrl}/>)
  }

}


export {
  AppwriteAuthComponent,
  GoogleAuth,
  FacebookAuth,
  // TwitterAuth,
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
  BitBucketAuth,
  BoxAuth,
  DailyMotionAuth,
  DisqusAuth,
  DropBoxAuth,
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
