import React, { useContext } from 'react';
import './login.css';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import fb from '../../images/fb.png';
import ggl from '../../images/google.png';


const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleSubmit = (e) => {
        if (loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email , loggedInUser.password)
            .catch(function(error) {
                console.log(error.message);
              });
        }
        e.preventDefault();
    };
    const handleBlur = (e) => {
        let isFormvalid = true;
        if (e.target.name === 'email') {
            isFormvalid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            isFormvalid = e.target.value.length > 8;
        }
        if (isFormvalid) {
            const newUser = {...loggedInUser};
            newUser[e.target.name] = e.target.value;
            setLoggedInUser(newUser);
        }
    };

    const handleFbSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            const {displayName,email} = result.user;
            const signedInUser = {user:displayName, email: email};
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            console.log(error.message);
          });
    }
    const handleGoogleSignIn = () => {
        const fbprovider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(fbprovider).then(function(result) {
            var token = result.credential.accessToken;
            const {displayName,email} = result.user;
            const signedInUser = {user:displayName, email: email};
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            console.log(error.message);
          });
    };
    return (
        <div className="home">
            <div className=" container">
                <div className="login-container">
                    <div className="login">
                        <form onSubmit={handleSubmit}>
                            <input onBlur={handleBlur} type="text" name="email" id="" placeholder="Username or Email" required/> <br/>
                            <input onBlur={handleBlur} type="password" name="password" id="" placeholder="password" required/> <br/>
                            <input style={{background:"gold",border:"none"}} type="submit" value="Log in"/>
                        </form>
                            <div>
                            <input type="checkbox" name="remember" id="Remember Me" value="Remember Me"></input>
                            <label for="Remember Me">Remember Me</label> 
                            </div>
                        <p style={{textAlign:"center"}}>Don't have an account? <Link>Create an account</Link> </p>
                        <p style={{textAlign:"center"}}>Or</p>
                        <Button 
                        variant="info" 
                        className="rounded-pill" 
                        onClick={handleGoogleSignIn}>  
                        Continue with Google.                         
                        <img style={{width:"20px",float:"right"}} src={ggl} alt=""/></Button> <br/>
                        <Button 
                        variant="info"
                         className="rounded-pill" 
                         onClick={handleFbSignIn}>
                             Continue with Facebook. 
                             <img style={{width:"20px",float:"right"}} src={fb} alt=""/></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;