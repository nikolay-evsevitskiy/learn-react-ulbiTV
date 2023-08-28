import React from 'react';
import {MyInput} from "../components/UI/input/MyInput";
import {MyButton} from "../components/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <h1>Page of Login</h1>
            <form>
                <MyInput type='text' placeholder='login'/>
                <MyInput type='password' placeholder='password'/>
                <MyButton>Login</MyButton>
            </form>

        </div>
    );
};

export default Login;
