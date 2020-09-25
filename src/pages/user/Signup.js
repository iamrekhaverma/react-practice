import React, { useState} from 'react';
import Layout from "core/Layout";
import { signup } from "auth";

export const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email:"",
        password:"",
        error: "",
        success: false,
    })
    const { name, email, password, success, error } = values;
    const handleChnage = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }
    const clickSubmit = event => {
        event.preventDefault();
        const { name, email, password } = values;
        signup(name, email, password).then(data => {
            console.log("data",data)
            if(data && data.error) {
                setValues({
                    ...values, 
                    error: data.error, 
                    success: false
                });

            } else {
                setValues({
                    ...values, 
                    name:"", 
                    email:"", 
                    password:"", 
                    success: true
                });
            }
        });
    }
    
    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? "": 'none'}}>
            { error }
        </div>
    )
    const showSuccess = () => (
        <div className="alert alert-info" style={{display: success ? "": 'none'}}>
            New user is created. Please signin.
        </div>
    )
    const signupForm =() => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input 
                    className="form-control" 
                    type="text" 
                    onChange={handleChnage('name')}
                    value={name}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input 
                    className="form-control" 
                    type="email" 
                    onChange={handleChnage('email')}
                    value={email}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input 
                    className="form-control" 
                    type="password" 
                    onChange={handleChnage('password')}
                    value={password}
                />
            </div>
            <button className="btn btn-primary" onClick={clickSubmit}>Submit</button>
        </form>
    );
    return (
        <Layout 
            title="Signup" 
            description="React ecommecre"
            className="container col-md-8 offset-md-12"
        >
            {showError()}
            {showSuccess()}
            {signupForm()}
            {/* {JSON.stringify(values)} */}
        </Layout>
    );
}