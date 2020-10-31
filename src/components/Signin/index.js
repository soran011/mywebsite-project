import React from 'react'
import { Link } from 'react-router-dom';
import './Signin.scss';
function SignIn() {
    return (
        <div className="container">
            <div className="container__formWrap">
                <Link className="container__formWrap--icon" to="/">MyWebsite</Link>
                <div className="container__formWrap--formContent">
                    <form className="container__formWrap--formContent__form" action="#">
                        <h1>Sign in to your account</h1>
                        <div className="form-label" htmlFor='for'>Email</div>
                        <input type="email" required/>
                        <div className="form-label" htmlFor='for'>Password</div>
                        <input type="password" required/>
                        <button type="submit">Continue</button>
                        <p>Forgot password</p>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default SignIn
