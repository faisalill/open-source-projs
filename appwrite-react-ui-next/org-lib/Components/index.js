import GoogleAuth from "./GoogleAuth";
import FacebookAuth from "./FacebookAuth";
// import TwitterAuth from "./TwitterAuth";
import GithubAuth from "./GithubAuth";
import EmailAuth from "./EmailAuth";
import MicrosoftAuth from "./MicrosoftAuth";
import AppleAuth from "./AppleAuth";
import PhoneAuth from "./PhoneAuth";
import AmazonAuth from "./AmazonAuth";
import AuthO from "./AuthO";
import DiscordAuth from "./DiscordAuth";
import SpotifyAuth from "./SpotifyAuth";
import TwitchAuth from "./TwitchAuth";
import AutodeskAuth from "./AutodeskAuth";
import AuthentikAuth from "./AuthentikAuth";
import BitBucketAuth from "./BitBucketAuth";
import BoxAuth from "./BoxAuth";
import DailyMotionAuth from "./DailyMotionAuth";
import DisqusAuth from "./DisqusAuth";
import DropBoxAuth from "./DropBoxAuth";
import EtsyAuth from "./EtsyAuth";
import GitlabAuth from "./GitlabAuth";
import LinkedinAuth from "./LinkedinAuth";
import NotionAuth from "./NotionAuth";
import OktaAuth from "./OktaAuth";
import PaypalAuth from "./PaypalAuth";
import PodioAuth from "./PodioAuth";
import SalesforceAuth from "./SalesforceAuth";
import SlackAuth from "./SlackAuth";
import TradeshiftAuth from "./TradeshiftAuth";
import WordpressAuth from "./WordpressAuth";
import YahooAuth from "./YahooAuth";
import YandexAuth from "./YandexAuth";
import ZoomAuth from "./ZoomAuth";
import BitlyAuth from "./BitlyAuth";
import StripeAuth from "./StripeAuth";
import YammerAuth from "./YammerAuth";


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
  // GoogleAuth,
  // FacebookAuth,
//   TwitterAuth,
  // GithubAuth,
  // EmailAuth,
  // MicrosoftAuth,
  // AppleAuth,
  // PhoneAuth,
  // AmazonAuth,
  // AuthO,
  // DiscordAuth,
  // SpotifyAuth,
  // TwitchAuth,
  // AutodeskAuth,
  // AuthentikAuth,
  // BitBucketAuth,
  // BoxAuth,
  // DailyMotionAuth,
  // DisqusAuth,
  // DropBoxAuth,
  // EtsyAuth,
  // GitlabAuth,
  // LinkedinAuth,
  // NotionAuth,
  // OktaAuth,
  // PaypalAuth,
  // PodioAuth,
  // SalesforceAuth,
  // SlackAuth,
  // TradeshiftAuth,
  // WordpressAuth,
  // YahooAuth,
  // YandexAuth,
  // ZoomAuth,
  // BitlyAuth, 
  // StripeAuth,
  // YammerAuth
};
