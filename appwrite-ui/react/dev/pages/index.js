import React from "react";
import { Client, Account } from "appwrite";
// import {
  // AppwriteAuthComponent,
// } from "../lib/Components";
// import useAuthUser from "@/lib/Hooks/useAuthUser";
import {AppwriteAuthComponent, useAuthUser} from 'appwriteui-react'

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_URL)
  .setProject(process.env.NEXT_PUBLIC_ID);
const account = new Account(client);

const App = () => {
  const { user, setUser, loading, Refresh, setRefresh, setLoading } = useAuthUser(account);
  let deploymentUrl = "https://appwrite-ui-helper.vercel.app/";
  let successUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : deploymentUrl;
  let failureUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : deploymentUrl;

  return (
    <>
      {loading ? (
        <div className="info-div">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="info-div">
          {user && (
            <p>
              Name: &nbsp;
              <span className="info">
                {user.name ? user.name : "Not Authorized"}{" "}
              </span>
            </p>
          )}
          {user && (
            <p>
              Email: &nbsp;
              <span className="info">
                {user.email ? user.email : "Not Authorized"}
              </span>
            </p>
          )}
          {user && (
            <p>
              Phone: &nbsp;
              <span className="info">
                {user.phone ? user.phone : "Not Authorized"}
              </span>
            </p>
          )}
          {user && (
            <p>
              Email Verified: &nbsp;{" "}
              <span className="info">
                {user.emailVerification ? "yes" : "no"}
              </span>
            </p>
          )}
          {user && (
            <p>
              Phone Verified: &nbsp;
              <span className="info">
                {user.phoneVerification ? "yes" : "no"}
              </span>
            </p>
          )}
          <div>
            <button
              className="sign-out-btn"
              onClick={() => {
                user.email || user.phone || user.name
                  ? account.deleteSessions("current").then((res) => {
                      setUser({
                        name: false,
                        email: false,
                        emailVerification: false,
                        phone: false,
                        phoneVerification: false,
                      });
                    })
                  : console.log("No sessions to delete");
              }}
            >
              Sign Out
            </button>
            <button
              className="sign-out-btn"
              onClick={() => {
                setRefresh(!Refresh);
                setLoading(true);
              }}
            >
              Refresh
            </button>
          </div>
        </div>
      )}
      <div className="component-showcase"
      style={{
        display: "flex",
        flexDirection: "row",
      }}
      >
        <div>
      <AppwriteAuthComponent
        authProvider="google"
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="facebook"
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="github"
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="amazon"
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent authProvider='auth0' account={account} successUrl={successUrl} failureUrl={failureUrl} />
      <AppwriteAuthComponent
        authProvider="discord"
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="spotify"
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='twitch'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="email"
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="phone"
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="autodesk"
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='bitbucket'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='magicurl'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      </div>
      <div>
      <AppwriteAuthComponent
        authProvider="bitly"
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="dailymotion"
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='disqus'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="dropbox"
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='gitlab'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="notion"
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='podio'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='slack'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='wordpress'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='yandex'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='zoom'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='yammer'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="anonymous"
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      </div>
      <div>
      <AppwriteAuthComponent
        authProvider='yahoo'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='microsoft'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='apple'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='authentik'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='box'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='etsy'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='linkedin'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='okta'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='paypal'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='salesforce'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='stripe'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='tradeshift'
        account={account}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      </div>
      </div>

      {/* <button
    onClick={()=>{
      const promise = account.get();
      promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error.message); // Failure
    });
    }
    }
    >Check sessions</button> */}
    </>
  );
};

export default App;
