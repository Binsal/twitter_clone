import React, { useState } from "react";
import twitterImage from "../../assests/images/twitter_login.jpg"
import TwitterIcon from '@mui/icons-material/Twitter';
import auth from '../../firebase.init';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';


const Login = () =>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    //const [errorMessage,setError] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(user);
        signInWithEmailAndPassword(email,password);
    }

    return(
        <div className="login-container">
           <div className="image-container">
            <img src={twitterImage} alt="twitter banner"></img>
           </div>
           <div className="form-container">
            <TwitterIcon/>
            <h2>Happening Now</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" className="email" 
                    placeholder="Email address" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" className="password" 
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                <div className="btn-login">
                    <button type="submit" className="btn">Login</button>
                </div>
            </form>
           </div>
        </div>
    );
};

export default Login;