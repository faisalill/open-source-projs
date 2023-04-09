import {render,  fireEvent} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import {AppwriteAuthComponent} from '../lib/Components/index'
import { act } from 'react-dom/test-utils';

describe('AppwriteAuthComponent', () => {
    const id = expect.any(String);
    const email = 'random@gmail.com';
    const password = 'randompassword';
    const authProvider = 'email';
    const successUrl = 'http://localhost/success';
    const failureUrl = 'http://localhost/failure';
    const verificationLink = 'http://localhost:3000?userId=d1dd51be-abfc-4643-ad78-539763f02e3d&secret=8482cb98a436792bfe891f2a2ef4b853410208f385219871462630392319fd5ed3c38d55f30915207b9691c409c247595f843ac16c230e051ad11427cc802776cd4b270e68f92a00331efb709ad10a8ea27644d2a61ecce9be1589e796b0fa482eaf5e2b55838f9ea6e7000566cd79eec80902ecf95c0f06cc0219ceeff648b1&expire=2023-04-15+09%3A06%3A04.213';
    const createEmailSession = jest.fn((email, password) => {
        return new Promise((resolve) => {
          const emailSession = {
            email,
            password,
          };
          resolve(emailSession);
        });
      });
      
      const createVerification = jest.fn((successUrl, failureUrl) => {
        return new Promise((resolve) => {
          const verification = {
            successUrl,
            failureUrl,
          };
          resolve(verification);
        });
      });
      
      const create = jest.fn((id, email, password) => {
        return new Promise((resolve) => {
          const account = {
            id,
            email,
            password,
          };
          resolve(account);
        });
      });
      
      const updateVerification = jest.fn((verificationId, status) => {
        return new Promise((resolve) => {
          const verification = {
            id: verificationId,
            status,
          };
          resolve(verification);
        });
      });
      
    const account = {
        createEmailSession,
        createVerification,
        create,
        updateVerification
    }

    test("email auth button should render", () =>{
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

    test("popup form with email,password input and submit button when email button is clicked", () =>{
        const {container, getByTitle} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )

        const emailInput = getByTitle('email-input');
        const passwordInput = getByTitle('password-input');
        const submitButton = getByTitle('pre-verification-submit-button');
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    })

    test("password input shows and hides input field when the show/hide button is clicked", () =>{
        const {container, getByTitle} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )

        const passwordInput = getByTitle('password-input');
        const showHideButton = getByTitle('show-hide-password-button');
        expect(passwordInput.type).toBe('password');
        fireEvent.click(showHideButton);
        act(() => {
        expect(passwordInput.type).toBe('text');
        })
    })

    test("A new email and password should be created with the proper values and redirect Urls.", () =>{
        const {container, getByTitle} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )

        const emailInput = getByTitle('email-input');
        const passwordInput = getByTitle('password-input');
        const submitButton = getByTitle('pre-verification-submit-button');
        act(()=>{
        fireEvent.change(emailInput, {target: {value: email}});
        fireEvent.change(passwordInput, {target: {value: password}});
        fireEvent.click(submitButton);
        expect(account.create).toHaveBeenCalledWith(id, email, password);
        })
    })

    test("Email and Password session should be created", () =>{
        const {container, getByTitle} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )

        const emailInput = getByTitle('email-input');
        const passwordInput = getByTitle('password-input');
        const submitButton = getByTitle('pre-verification-submit-button');
        fireEvent.change(emailInput, {target: {value: email}});
        fireEvent.change(passwordInput, {target: {value: password}});
        fireEvent.click(submitButton);
        expect(account.createEmailSession).toHaveBeenCalledWith( email, password);
    })

    test("Email Verification Link should be sent with the proper Urls", () =>{
        const {container, getByTitle} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )

        const emailInput = getByTitle('email-input');
        const passwordInput = getByTitle('password-input');
        const submitButton = getByTitle('pre-verification-submit-button');
        fireEvent.change(emailInput, {target: {value: email}});
        fireEvent.change(passwordInput, {target: {value: password}});
        fireEvent.click(submitButton);
        expect(account.createVerification).toHaveBeenCalledWith(successUrl, failureUrl);
    })
    test("Popup with input for verification link should render", () =>{
        const {container, getByTitle} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )

        const emailInput = getByTitle('email-input');
        const passwordInput = getByTitle('password-input');
        const submitButton = getByTitle('pre-verification-submit-button');
        fireEvent.change(emailInput, {target: {value: email}});
        fireEvent.change(passwordInput, {target: {value: password}});
        fireEvent.click(submitButton);
        const verificationInput = getByTitle('verification-link-input');
        const verificationSubmitButton = getByTitle('verification-link-submit-button');
        expect(verificationInput).toBeInTheDocument();
        expect(verificationSubmitButton).toBeInTheDocument();
    })
    test("Email should be verified when verification link is submitted", () =>{
        const {container, getByTitle} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )
        const emailInput = getByTitle('email-input');
        const passwordInput = getByTitle('password-input');
        const submitButton = getByTitle('pre-verification-submit-button');
        fireEvent.change(emailInput, {target: {value: email}});
        fireEvent.change(passwordInput, {target: {value: password}});
        fireEvent.click(submitButton);
        const verificationInput = getByTitle('verification-link-input');
        const verificationSubmitButton = getByTitle('verification-link-submit-button');
        fireEvent.change(verificationInput, {target: {value: verificationLink}});
        fireEvent.click(verificationSubmitButton);
        const userIdFromVerificationLink = verificationLink.split('?')[1].split('&')[0].split('=')[1]
        const secretKeyFromVerificationLink = verificationLink.split('?')[1].split('&')[1].split('=')[1].toString()
        expect(account.updateVerification).toHaveBeenCalledWith(userIdFromVerificationLink, secretKeyFromVerificationLink);
    })
})