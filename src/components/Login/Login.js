import { Link, Paper, Typography } from '@mui/material';
import { push } from 'connected-react-router';
import {GoogleLogin} from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../stores/loginSlice';

import './Login.css';

const Login = () => {
    const dispatch = useDispatch();

    const onLoginSuccess = (response) => {
        console.log(response);
        const {email, name, imageUrl} = response.profileObj;
        dispatch(loginSuccess({email, name, imageUrl}));
        dispatch(push('/home'));
    }
    return (
        <div className='login-page'>
            <Paper elevation={24} className='login-container'>
                <Typography variant='h5' textAlign="center">LOGIN</Typography>
                <div className='login-google-btn'>
                    <GoogleLogin
                        clientId='870932471327-614on922chrdfo9fk456tmhk76cba24r.apps.googleusercontent.com'
                        buttonText='Login with Google'
                        onSuccess={onLoginSuccess}
                    />
                </div>
                <Link href="#" color="inherit" className="login-with-email">Login with Email</Link>
            </Paper>
        </div>
    )
}

export default Login;