import React from 'react';
import { Helmet } from 'react-helmet';
import { SignUpCard } from '../../components/auth/SignUpCard';

const SignUp: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gray-100">
                <SignUpCard />
            </div>
        </>
    );
};

export default SignUp;
