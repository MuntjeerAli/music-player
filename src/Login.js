import React from 'react';
import './App.css';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=dedd4b6c1a454ff290bcc9206cb7f2c2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

const Login = () => {
  return (
    <div className='log-in'>
      <a className='btn-success' href={AUTH_URL}>Log in</a>
    </div>
  )
};

export default Login;
