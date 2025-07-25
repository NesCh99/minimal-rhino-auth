import React from 'react';
import { SignInCard } from '../../components/auth/SignInCard';
import { Helmet } from 'react-helmet';

const SignIn: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gray-100">
                <SignInCard />
            </div>
        </>
    );
};

export default SignIn;
