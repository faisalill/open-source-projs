import {render,  fireEvent} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import {AppwriteAuthComponent} from '../lib/Components/index'

describe('AppwriteAuthComponent', () => {
    const authProviders = ['google', 'apple',  'github', 'facebook', 'amazon', 'auth0', 'discord', 'spotify', 'twitch','autodesk', 'bitbucket', 'bitly', 'dailymotion', 'disqus', 'dropbox', 'gitlab', 'notion', 'podio', 'slack' , 'wordpress', 'yandex', 'zoom', 'yammer' , 'yahoo' , 'microsoft' ,  'authentik' , 'box' , 'etsy', 'linkedin', 'okta', 'paypal', 'salesforce', 'stripe', 'tradeshift']
    const successUrl = '/success';
    const failureUrl = '/failure';
    const createOAuth2Session = jest.fn();
    const account = {
        createOAuth2Session
    }

    test.each(authProviders)("should render %s provider auth button", (authProvider) =>{
        const {container} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )
        const childComponent = container.querySelector(`.${authProvider}-auth-btn`);
        expect(childComponent).toBeInTheDocument();
    })

    test.each(authProviders)("When %s provider button is clicked should call account.createOAuth2Session with the proper auth provider and URls", (authProvider) =>{
        const {container} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )
        const childComponent = container.querySelector(`.${authProvider}-auth-btn`);
        fireEvent.click(childComponent);
        expect(account.createOAuth2Session).toHaveBeenCalledWith(authProvider, successUrl, failureUrl);
    })
});

