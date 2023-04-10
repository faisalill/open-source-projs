import {render,  fireEvent} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import {AppwriteAuthComponent} from '../lib/Components/index'


describe('Anonymous Auth Component', () => {

const authProvider = 'anonymous';
const successUrl = '/success';
const failureUrl = '/failure';
const createAnonymousSession = jest.fn();
const account = {
    createAnonymousSession
}

    it('should render anonymous auth button', () => {
        const {container} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )
        const childComponent = container.querySelector(`.appwriteui-react-anonymous-auth-btn`);
        expect(childComponent).toBeInTheDocument();
    })

    it('should create a anonymous session when clicked', () => {
        const {container} = render(
            <AppwriteAuthComponent
            account={account}
            authProvider={authProvider}
            successUrl={successUrl}
            failureUrl={failureUrl}
            />
        )
        const childComponent = container.querySelector(`.appwriteui-react-anonymous-auth-btn`);
        fireEvent.click(childComponent);
        expect(account.createAnonymousSession);
    })
})