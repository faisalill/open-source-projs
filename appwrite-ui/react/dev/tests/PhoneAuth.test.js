import {render,  fireEvent} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import {AppwriteAuthComponent} from '../lib/Components/index'
import { act } from 'react-dom/test-utils';
describe('PhoneAuth', () => {
    const id = expect.any(String);
    const phoneNumber = '1234567890';
    const verificationCode = '123456';
    const authProvider = 'phone';
    const successUrl = '/success';
    const failureUrl = '/failure';
    const createPhoneSession = jest.fn((id,password)=>{
        return new Promise((resolve)=>{
            resolve();
        })
    });
    const updatePhoneSession = jest.fn((id, verificationCode)=>{
        return new Promise((resolve)=>{
            resolve();
        })
    });
    const account = {
        createPhoneSession,
        updatePhoneSession
    }
it("should render phone auth component", () => {
    const {getByTitle, container} = render(
        <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
        />
    )
    const phoneAuth = getByTitle('phone-auth-button');
    expect(phoneAuth).toBeInTheDocument();
})

it("should render a popup form asking for phone number", () => {
    const {getByTitle, container} = render(
        <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
        />
    )
     const phoneNumberInput = getByTitle('phone-number-input');    
     const phoneNumberSubmitButton = getByTitle('phone-number-submit-button');
        expect(phoneNumberInput).toBeInTheDocument();   
        expect(phoneNumberSubmitButton).toBeInTheDocument();
})

it("should create a phone session with the respective phone number", () => {
    const {getByTitle, container} = render(
        <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
        />
    )
     const phoneNumberInput = getByTitle('phone-number-input');    
     const phoneNumberSubmitButton = getByTitle('phone-number-submit-button');
     fireEvent.change(phoneNumberInput, {target: {value: phoneNumber}});
     fireEvent.click(phoneNumberSubmitButton);
     act(()=>{
     expect(createPhoneSession).toBeCalledWith(id,phoneNumber);
     }
    )
})

it("should render a popup form asking for the verification code ", () => {
    const {getByTitle, container} = render(
        <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
        />
    )
     const phoneNumberInput = getByTitle('phone-number-input');    
     const phoneNumberSubmitButton = getByTitle('phone-number-submit-button');
     fireEvent.change(phoneNumberInput, {target: {value: phoneNumber}});
     fireEvent.click(phoneNumberSubmitButton);
     const verificationCodeInput = getByTitle('verification-input');
     const verificationCodeSubmitButton = getByTitle('verification-submit-button');
     expect(verificationCodeInput).toBeInTheDocument();
     expect(verificationCodeSubmitButton).toBeInTheDocument();
})

it("should verify and update the verification status of the phone Number", () => {
    const {getByTitle, container} = render(
        <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
        />
    )
     const phoneNumberInput = getByTitle('phone-number-input');    
     const phoneNumberSubmitButton = getByTitle('phone-number-submit-button');
     fireEvent.change(phoneNumberInput, {target: {value: phoneNumber}});
     fireEvent.click(phoneNumberSubmitButton);
     const verificationCodeInput = getByTitle('verification-input');
     const verificationCodeSubmitButton = getByTitle('verification-submit-button');
     fireEvent.change(verificationCodeInput, {target: {value: verificationCode}});
     fireEvent.click(verificationCodeSubmitButton);
        act(()=>{
        expect(updatePhoneSession).toBeCalledWith(id,verificationCode);
        }
        )
})


})