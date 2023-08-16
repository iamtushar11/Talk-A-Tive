import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import "../style.scss"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
function Login() {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")

        } catch (err) {
            setErr(true);
        }
    };
    return (
        <div className='formContainer'>
            <div className='formWrapper '>
                <span className='logo'>Talk-A-Tive</span>
                <span className='title'>Login</span>
                <form onSubmit={handleSubmit}>

                    <input type="email" placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <button className='btn'>Sign-In</button>
                    {err && <span>Something Went wrong</span>}
                </form>
                <p>You don't have an account? <Link to="/register" >Register</Link></p>
            </div>
        </div>
    )
}

export default Login