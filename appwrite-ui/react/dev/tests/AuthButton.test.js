import React from 'react';
import {render,  fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthButton from '../lib/Helper/AuthButton';

describe('AuthButton', ()=>{
    const account = {
        createOAuth2Session: jest.fn(),
      };
      const authProviders = ['google', 'github', 'facebook', 'amazon', 'auth0', 'discord', 'spotify', 'twitch','autodesk', 'bitbucket', 'bitly', 'dailymotion', 'disqus', 'dropbox', 'gitlab', 'notion', 'podio', 'slack' , 'wordpress', 'yandex', 'zoom', 'yammer' , 'yahoo' , 'microsoft' , 'apple' , 'authentik' , 'box' , 'etsy', 'linkedin', 'okta', 'paypal', 'salesforce', 'stripe', 'tradeshift']
      const successUrl = '/success';
      const failureUrl = '/failure';
      const icon = <i></i>;
      const displayTexts = ['Sign in with Google', 'Sign in with Github', 'Sign in with Facebook', 'Sign in with Amazon', 'Sign in with Auth0', 'Sign in with Discord', 'Sign in with Spotify', 'Sign in with Twitch', 'Sign in with Autodesk', 'Sign in with Bitbucket', 'Sign in with Bitly', 'Sign in with Dailymotion', 'Sign in with Disqus', 'Sign in with Dropbox', 'Sign in with Gitlab', 'Sign in with Notion', 'Sign in with Podio', 'Sign in with Slack', 'Sign in with Wordpress', 'Sign in with Yandex', 'Sign in with Zoom', 'Sign in with Yammer', 'Sign in with Yahoo', 'Sign in with Microsoft', 'Sign in with Apple', 'Sign in with Authentik', 'Sign in with Box', 'Sign in with Etsy', 'Sign in with Linkedin', 'Sign in with Okta', 'Sign in with Paypal', 'Sign in with Salesforce', 'Sign in with Stripe', 'Sign in with Tradeshift'];
    test.each(authProviders)('should render %s button with the proper display text', (authProvider) =>{
        const {getByRole} = render(
            <AuthButton
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            icon={icon}
            displayText={displayTexts[authProviders.indexOf(authProvider)]}
            />
        )
        expect(getByRole('button')).toHaveTextContent(displayTexts[authProviders.indexOf(authProvider)]);
        expect(getByRole('button')).toBeInTheDocument();
    })
    test.each(authProviders)('should call createOAuth2Session with %s provider when clicked', (authProvider)=>{
           const {getByRole} = render(
                <AuthButton
                account={account}
                authProvider={authProvider}
                successUrl={successUrl}
                failureUrl={failureUrl}
                icon={icon}
                displayText={displayTexts[authProviders.indexOf(authProvider)]}
                />
            )
            fireEvent.click(getByRole('button'));
            expect(account.createOAuth2Session).toHaveBeenCalledWith(authProvider, successUrl, failureUrl);
    })    
})