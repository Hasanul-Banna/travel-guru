import React, { useContext, useState } from 'react';
import './login.css';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import fb from '../../images/fb.png';
import ggl from '../../images/google.png';


const Login = () => {
    const [newPerson,setNewperson] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleSubmit = (e) => {
        if (newPerson && loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res => {
                console.log(res);
                const newUser = { ...loggedInUser };
                newUser.error = '';
                newUser.success = 'Congrats! Account Created! please,login';
                setLoggedInUser(newUser);
            })
                .catch(function (error) {
                    console.log(error.message);
                    const newUser = { ...loggedInUser };
                    newUser.error = error.message;
                    newUser.success = '';
                    setLoggedInUser(newUser);
                });
        }

        if (!newPerson && loggedInUser.email && loggedInUser.password){
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email , loggedInUser.password)
            .then(res => {
                console.log(res);
                const { displayName, email } = res.user;
                const signedInUser = { user: displayName, email: email };
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(function(error) {
                console.log(error.message);
                const newUser = { ...loggedInUser };
                newUser.error = error.message;
                newUser.success = '';
                setLoggedInUser(newUser);
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
            const newUser = { ...loggedInUser };
            newUser[e.target.name] = e.target.value;
            setLoggedInUser(newUser);
        }
    };

    const handleFbSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            var token = result.credential.accessToken;
            const { displayName, email } = result.user;
            const signedInUser = { user: displayName, email: email };
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            console.log(error.message);
        });
    }
    const handleGoogleSignIn = () => {
        const fbprovider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(fbprovider).then(function (result) {
            var token = result.credential.accessToken;
            const { displayName, email } = result.user;
            const signedInUser = { user: displayName, email: email };
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            console.log(error.message);
        });
    };
    return (
        <div className="home">
            <div className=" container">
                <div className="login-container">
                    <div className="login">
                        <form onSubmit={handleSubmit}>
                            { newPerson && <input type="text" name="displayName" id="" placeholder="Your Fullname"/>} <br/>
                            <input onBlur={handleBlur} type="text" name="email" id="" placeholder="Your Email" required /> <br />
                            <input onBlur={handleBlur} type="password" name="password" id="" placeholder="Your Password" required /> <br />
                            {
                                newPerson ? <input style={{ background: "gold", border: "none" }} type="submit" value="Sign Up" /> :
                                <input style={{ background: "gold", border: "none" }} type="submit" value="Log in" />
                            }
                        </form> <p style={{color:"red"}}>{loggedInUser.error}</p> <p style={{color:"green"}}>{loggedInUser.success}</p>
                        <div>
                            <input type="checkbox" name="remember" id="Remember Me" value="Remember Me"></input>
                            <label for="Remember Me">Remember Me</label> <Link style={{float:"right"}}>Forgot password?</Link>
                        </div>
                            {
                                newPerson ?<p style={{ textAlign: "center", margin:"0" }}>Already have an account? 
                                <Link onClick={()=> setNewperson(!newPerson)}>Log In</Link> </p> :
                                 <p style={{ textAlign: "center", margin:"0" }}>Don't have an account? 
                                 <Link onClick={()=> setNewperson(!newPerson)}>Create an account</Link> </p>
                            }
                        <p id="or">OR</p>
                        <Button
                            variant="info"
                            className="rounded-pill"
                            onClick={handleGoogleSignIn}>
                            Continue with Google.
                        <img style={{ width: "20px", float: "right" }} src={ggl} alt="" /></Button> <br />
                        <Button
                            variant="info"
                            className="rounded-pill"
                            onClick={handleFbSignIn}>
                            Continue with Facebook.
                             <img style={{ width: "20px", float: "right" }} src={fb} alt="" /></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;