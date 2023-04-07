import AuthButton from '../Helper/AuthButton.jsx'
import { Account } from 'appwrite'
import React from 'react'
const YammerAuth = ({client, successUrl, failureUrl}) => {
    const account = new Account(client)
  return (
    <AuthButton account={account} authProvider='yammer' btnClassName='yammer-auth-btn' displayText='Sign in with Yammer' successUrl={successUrl} failureUrl={failureUrl} icon={<YammerLogo className='icon'/> }   />
  )
}

export default YammerAuth

function YammerLogo () {
    return (<svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>OfficeCore10_32x_24x_20x_16x_01-22-2019</title><g id="STYLE_COLOR" data-name="STYLE = COLOR"><path d="M11.55018,9.71687a.4163.4163,0,0,1-.05679-.49349.41.41,0,0,1,.06324-.08307L20.085.59887a.83408.83408,0,0,1,1.20252.02354,22.62072,22.62072,0,0,1,5.2527,9.54509l0,.00006L21.37806,16,13.701,13.596a9.25859,9.25859,0,0,0-2.15081-3.87913Z" fill="#28a8ea"/><path d="M30.62719,9.96175A.832.832,0,0,0,29.60149,9.35L13.69967,13.59747a9.37875,9.37875,0,0,1,.00309,4.8345l5.30344,6.60672L26.555,21.88657l3.04229.81775a.832.832,0,0,0,1.02687-.611A26.868,26.868,0,0,0,30.62719,9.96175Z" fill="#0078d4"/><path d="M13.70282,18.43177a9.26173,9.26173,0,0,1-2.1295,3.87451.417.417,0,0,0,.00614.58365l8.525,8.51191a.8335.8335,0,0,0,1.19983-.02262,22.54982,22.54982,0,0,0,5.2509-9.49281Z" fill="#0358a7"/><path d="M18,24.66663V8.33331A1.33727,1.33727,0,0,0,16.66663,7h-2.994l-2.116,2.11926a.40811.40811,0,0,0-.06323.08307.41622.41622,0,0,0,.05676.49347A9.25873,9.25873,0,0,1,13.701,13.575l.00336.00018-.0047.00129a9.38226,9.38226,0,0,1,.00311,4.83447,9.21967,9.21967,0,0,1-.41467,1.20862,9.27745,9.27745,0,0,1-1.71479,2.66571.417.417,0,0,0,.00617.58368L14.71539,26h1.95124A1.33732,1.33732,0,0,0,18,24.66663Z" opacity="0.1"/><path d="M17,25.66663V9.33331A1.33727,1.33727,0,0,0,15.66663,8H12.67419L11.55664,9.11926a.40811.40811,0,0,0-.06323.08307.41622.41622,0,0,0,.05676.49347A9.25873,9.25873,0,0,1,13.701,13.575l.00336.00018-.0047.00129a9.38226,9.38226,0,0,1,.00311,4.83447,9.21967,9.21967,0,0,1-.41467,1.20862,9.27745,9.27745,0,0,1-1.71479,2.66571.417.417,0,0,0,.00617.58368l4.13617,4.12982A1.33727,1.33727,0,0,0,17,25.66663Z" opacity="0.2"/><path d="M17,23.66663V9.33331A1.33727,1.33727,0,0,0,15.66663,8H12.67419L11.55664,9.11926a.40811.40811,0,0,0-.06323.08307.41622.41622,0,0,0,.05676.49347A9.25873,9.25873,0,0,1,13.701,13.575l.00336.00018-.0047.00129a9.38226,9.38226,0,0,1,.00311,4.83447,9.21967,9.21967,0,0,1-.41467,1.20862,9.27745,9.27745,0,0,1-1.71479,2.66571.417.417,0,0,0,.00617.58368L13.71387,25h1.95276A1.33732,1.33732,0,0,0,17,23.66663Z" opacity="0.2"/><path d="M16,23.66663V9.33331A1.33727,1.33727,0,0,0,14.66663,8H12.67419L11.55664,9.11926a.40811.40811,0,0,0-.06323.08307.41622.41622,0,0,0,.05676.49347A9.25873,9.25873,0,0,1,13.701,13.575l.00336.00018-.0047.00129a9.38226,9.38226,0,0,1,.00311,4.83447,9.21967,9.21967,0,0,1-.41467,1.20862,9.27745,9.27745,0,0,1-1.71479,2.66571.417.417,0,0,0,.00617.58368L13.71387,25h.95276A1.33732,1.33732,0,0,0,16,23.66663Z" opacity="0.2"/><path id="Back_Plate" data-name="Back Plate" d="M1.33333,8H14.66669A1.33334,1.33334,0,0,1,16,9.33334V22.66666A1.33333,1.33333,0,0,1,14.6667,24H1.33334A1.33334,1.33334,0,0,1,0,22.66666V9.33333A1.33333,1.33333,0,0,1,1.33333,8Z" fill="#0078d4"/><path d="M7.82588,15.26778a3.361,3.361,0,0,1,.22316.59972H8.07a2.84446,2.84446,0,0,1,.21617-.58577l2.02264-3.8095A.88924.88924,0,0,1,11.09417,11h0a.88924.88924,0,0,1,.771,1.33223L9.06682,17.20292a.88915.88915,0,0,0-.1182.443v2.46485A.88924.88924,0,0,1,8.05938,21H7.8783a.88924.88924,0,0,1-.88924-.88924V17.675a.88928.88928,0,0,0-.11285-.43356L4.12945,12.3228A.88924.88924,0,0,1,4.90583,11h.1748a.88923.88923,0,0,1,.79012.48126Z" fill="#fff"/><rect width="32" height="32" fill="none"/></g></svg>)

}