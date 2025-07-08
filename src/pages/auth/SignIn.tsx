import React from 'react';
import { SigninCard } from '../../components/auth/SigninCard';
import { Helmet } from 'react-helmet';

const SignIn: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gray-100">
                <SigninCard />
            </div>
        </>
    );
};

export default SignIn;
