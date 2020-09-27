import React from 'react';
import './sign-in-sign-up.scss';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

function SignInSignUp() {
    return (
        <div className="sign-in-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUp;
