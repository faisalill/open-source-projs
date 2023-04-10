import {render,  fireEvent} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import {AppwriteAuthComponent} from '../lib/Components/index'

describe('Magic Url Auth Component', () => {
  
    const authProvider = 'magicurl';
    const successUrl = '/success';
    const failureUrl = '/failure';
    const createMagicURLSession = jest.fn();
    const updateMagicURLSession = jest.fn();
    const account = {
        createMagicURLSession,
        updateMagicURLSession
    }
    const email = 'random@email.com';
    const id = expect.any(String);
    const verficationLink = 'http://localhost:5173?userId=check&secret=0ea2a32397bda733b4db627355dd6b96cda4483c7d439aa91a4c8b195d960d907eb33d4780c0d7880cc84bd1a2af27eb102aafef640c1c28bf7a744c563a1d2bfca843aae025d8c77bbca7ef018e69772d5c4d3c6920a46bf1b3cbb88b09bd93345c1d75addab2f12a1a8cb2d7a3c4e96bdbd1082a433257904457e5237cd7ef&expire=2023-04-10+12%3A25%3A51.956'

    it("should render magic url auth button", () => {
        const {container} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )
        const childComponent = container.querySelector(`.appwriteui-react-magicurl-auth-btn`);
        expect(childComponent).toBeInTheDocument();
    }
    )

    it("should show a popup form when pressed", () => {
        const {container, getByTitle} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )
        const childComponent = container.querySelector(`.appwriteui-react-magicurl-auth-btn`);
        fireEvent.click(childComponent);
        const emailInput = getByTitle('email-input');
        const submitButton = getByTitle('pre-verification-submit-button');
        expect(emailInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    })

    it("should create a magic url session when form is filled and submit button is clicked", () => {
        const {container, getByTitle} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )
        const childComponent = container.querySelector(`.appwriteui-react-magicurl-auth-btn`);
        fireEvent.click(childComponent);
        const emailInput = getByTitle('email-input');
        const submitButton = getByTitle('pre-verification-submit-button');
        fireEvent.change(emailInput, {target: {value: email}});
        fireEvent.click(submitButton);
        expect(account.createMagicURLSession).toHaveBeenCalledWith(id,email);
    })

    it("should show a popup to enter verification link when form is filled and submit button is clicked", () => {
        const {container, getByTitle} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )
        const childComponent = container.querySelector(`.appwriteui-react-magicurl-auth-btn`);
        fireEvent.click(childComponent);
        const emailInput = getByTitle('email-input');
        const submitButton = getByTitle('pre-verification-submit-button');
        fireEvent.change(emailInput, {target: {value: email}});
        fireEvent.click(submitButton);
        const verificationInput = getByTitle('verification-link-input');
        const verificationSubmitButton = getByTitle('verification-link-submit-button');
        expect(verificationInput).toBeInTheDocument();
        expect(verificationSubmitButton).toBeInTheDocument();
    }
    )

    it("should update the verification status of the user when the verification link is pasted and submit button is clicked", () => {
        const {container, getByTitle} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )
        const childComponent = container.querySelector(`.appwriteui-react-magicurl-auth-btn`);
        fireEvent.click(childComponent);
        const emailInput = getByTitle('email-input');
        const submitButton = getByTitle('pre-verification-submit-button');
        fireEvent.change(emailInput, {target: {value: email}});
        fireEvent.click(submitButton);
        const verificationInput = getByTitle('verification-link-input');
        const verificationSubmitButton = getByTitle('verification-link-submit-button');
        fireEvent.change(verificationInput, {target: {value: verficationLink}});
        fireEvent.click(verificationSubmitButton);
        const userId = verficationLink.split('?')[1].split('&')[0].split('=')[1].toString()
        const secret = verficationLink.split('?')[1].split('&')[1].split('=')[1].toString()
        expect(account.updateMagicURLSession).toHaveBeenCalledWith(userId, secret);
    }
    )
})
