# Contributing to AppwriteUi
Thank you for your interest in contributing to this project! This document outlines the guidelines for contributing to this project. Proceed by reading the Skills section below and pick your framework of choice.

>Note: You must know React and Sass/CSS to contribute to this project. If you are not familiar with Sass, you can learn more about it [here](https://www.youtube.com/watch?v=akDIJa0AP5c).


# Appwrite UI Auth Components for Web

## Table of Contents
1. [Demo](#demo)
1. [About](#about)
1. [Features](#features)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Configuration](#configuration)
1. [Auth Providers](#auth-providers)
1. [Contributing](#contributing)

## Demo <a name="demo"></a>
You can see the demo of the Appwrite UI Auth Components for Web [here](https://appwrite-ui-react.vercel.app).
![](./images//auth-components.png)

## About {#about}
Appwrite UI is an open source React library that provides a set of reusable components for building your own UI for Appwrite. It is built on top of React and [Appwrite Javascript SDK](https://github.com/appwrite/sdk-for-web).

### Features {#features}
Appwrite UI Auth Components for Web includes a range of features to simplify the process of implementing authentication and user management in your React projects. Some of the key features include:

- A collection of pre-built, fully styled authentication components, including email and phone number login.
- Support for popular authentication providers, including email , phone number, Google, Facebook, Github, Amazon, Auth0, Discord, Spotify, Twitch, Autodesk, Bitbucket, Bitly, Dailymotion, Disqus, Dropbox, Gitlab, Notion, Podio, Slack, Wordpress, Yandex, Zoom, Yammer, Yahoo, Microsoft, Apple, Authentik, Box, Etsy, LinkedIn, Okta, Paypal, Salesforce, Stripe and Tradeshift.
- Components match the look and feel of the Brand styling.
- Simple integration with your existing React project.

## Getting Started
### Installation {#installation}
Install it using npm: 
```bash
npm install appwriteui-react;
```
### Usage {#usage}
Import the Appwrite Auth Component in your React project and pass it props to configure it for different authentication providers. For example, to add a google login button, you can use the following code:
```js
import {Client} from 'appwrite';
import {AppwriteAuthComponent} from 'appwriteui-react';

const client = new Client()
.setEndpoint(...)// Your Appwrite Endpoint
.setProject(...);// Your project ID

const successUrl = 'redirect url when the authenticaion is successfull';
const failureUrl = 'redirect url when the authenticaion is unsuccessfull';

<AppwriteAuthComponent
        authProvider="google"
        client={client} // Appwrite client
        successUrl={successUrl}
        failureUrl={failureUrl}
/>
...

```
The output will be a component as shown below, clicking on it will redirect the user to the google login page and then redirect the user to the successUrl or failureUrl based on the authentication result (make sure to have google login enabled in your appwrite project with the correct credentials):
![](./images/google-auth-btn.png)


### Configuration {#configuration}
You can pass the following props to configure the Appwrite Auth Component:
```jsx
<AppwriteAuthComponent
        authProvider="..."//see the list of auth providers below
        client={client} // Appwrite client
        successUrl="..."
        failureUrl="..."
/>
```
| Name |  Required | Description |
| :--- | :--: | ---: |
| `authProvider` |  yes | The auth provider that you want to use for authentication. Check [here](#auth-providers) for all the options u can enter for `authProvider`|
| `client` | yes | It is the `Client` from the Appwrite Sdk which is setup using the appwrite deployment url and project id as shown [above](#usage).    |
| `sucessUrl` | yes | Url to redirect the user when authentication is successful.|
| `failureUrl` | yes | Url to redirect the user when authentication is unsuccessful.|

#### Auth Providers {#auth-providers}
> Note: You can use any of the following auth providers for authentication. Make sure to have the corresponding login enabled in your appwrite project with the correct credentials.

| Auth Provider | Code | 
| :--- |  ---: |
| `Google` |   ```authProvider='google'```|
| `Facebook` |   ```authProvider='facebook'```|
| `Github` |   ```authProvider='github'```|
| `Amazon` |   ```authProvider='amazon'```|
| `Auth0` |   ```authProvider='auth0'```|
| `Discord` |   ```authProvider='discord'```|
| `Spotify` |   ```authProvider='spotify'```|
| `twitch` |   ```authProvider='twitch'```|
| `Email` |   ```authProvider='email'```|
| `Phone` |   ```authProvider='phone'```|
| `Autodesk` |   ```authProvider='autodesk'```|
| `Bitbucket` |   ```authProvider='bitbucket'```|
| `Bitly` |   ```authProvider='bitly'```|
| `Dailymotion` |   ```authProvider='dailymotion'```|
| `Disqus` |   ```authProvider='disqus'```|
| `Dropbox` |   ```authProvider='dropbox'```|
| `Gitlab` |   ```authProvider='gitlab'```|
| `Notion` |   ```authProvider='notion'```|
| `Podio` |   ```authProvider='podio'```|
| `Slack` |   ```authProvider='slack'```|
| `Wordpress` |   ```authProvider='wordpress'```|
| `Yandex` |   ```authProvider='yandex'```|
| `Zoom` |   ```authProvider='zoom'```|
| `Yammer` |   ```authProvider='yammer'```|
| `Yahoo` |   ```authProvider='yahoo'```|
| `Microsoft` |   ```authProvider='microsoft'```|
| `Apple` |   ```authProvider='apple'```|
| `Authentik` |   ```authProvider='authentik'```|
| `Box` |   ```authProvider='box'```|
| `Etsy` |   ```authProvider='etsy'```|
| `LinkedIn` |   ```authProvider='linkedin'```|
| `Okta` |   ```authProvider='okta'```|
| `Paypal` |   ```authProvider='paypal'```|
| `Salesforce` |   ```authProvider='salesforce'```|
| `Stripe` |   ```authProvider='stripe'```|
| `Tradeshift` |   ```authProvider='tradeshift'```|


## Contributing {#contributing}
We would love to see your contributions, whether it's a new feature, bug fix, or just improvement to the documentation. If you are interested in contributing to Appwrite UI, please read our [Contributing Guide](./CONTRIBUTING.md).
