import React from "react";
import { Client, Account } from "appwrite";
import {
  AppwriteAuthComponent,
} from "../lib/Components";
import useAuthUser from "@/lib/Hooks/useAuthUser";
// import {AppwriteAuthComponent, useAuthUser} from 'appwriteui-react'


const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_URL)
  .setProject(process.env.NEXT_PUBLIC_ID);
const account = new Account(client);

const App = () => {
  const { user, setUser, loading, Refresh, setRefresh, setLoading } =
    useAuthUser(account);
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
      <AppwriteAuthComponent
        authProvider="google"
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="facebook"
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="github"
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="amazon"
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent authProvider='auth0' client={client} successUrl={successUrl} failureUrl={failureUrl} />
      <AppwriteAuthComponent
        authProvider="discord"
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="spotify"
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='twitch'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="email"
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
        Refresh={Refresh}
        setRefresh={setRefresh}
        setLoading={setLoading}
      />
      <AppwriteAuthComponent
        authProvider="phone"
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
        Refresh={Refresh}
        setRefresh={setRefresh}
        setLoading={setLoading}
      />
      <AppwriteAuthComponent
        authProvider="autodesk"
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='bitbucket'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="bitly"
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="dailymotion"
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='disqus'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="dropbox"
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='gitlab'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider="notion"
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='podio'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='slack'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='wordpress'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='yandex'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='zoom'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='yammer'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='yahoo'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='microsoft'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='apple'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='authentik'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='box'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='etsy'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='linkedin'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='okta'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='paypal'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='salesforce'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='stripe'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />
      <AppwriteAuthComponent
        authProvider='tradeshift'
        client={client}
        successUrl={successUrl}
        failureUrl={failureUrl}
      />

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
