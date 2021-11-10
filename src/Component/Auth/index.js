import Login from './Login';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import SignUp from './SignUp';
import { useState } from 'react';

function Auth() {
    const [isLoginScreen, setIsLoginScreen] = useState(true);
    return (
        <div>
            {
                isLoginScreen ? <Login setIsLoginScreen={(value) => setIsLoginScreen(value)} /> : <SignUp setIsLoginScreen={(value) => setIsLoginScreen(value)} />
            }

        </div>

    );
}

export default Auth;
