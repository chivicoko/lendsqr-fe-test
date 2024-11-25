"use client";

import React, { useState } from 'react';
import './login.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('password');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(true);

  const router = useRouter();

  // Toggle password visibility
  const handleShowPassword = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  // Validate email
  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return false;
    }
    setEmailError('');
    return true;
  };

  // Validate password
  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required.');
      return false;
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      setFormValid(true);

      document.cookie = 'authenticated=true; path=/';
      router.push('/dashboard');
    } else {
      setFormValid(false);
    }
  };

  return (
    <section className='container'>
      <div className="wrapper">
        <section className='leftHalf'>
          <div className="logo">
            <div className="loginLogo">
              <Image
                src="/images/Group.svg"
                alt="Lendsqr's Logo"
                fill
                className="img"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="loginImage">
            <Image
              src="/images/pablo-sign-in 1.svg"
              alt="Lend"
              fill
              className="img"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        <section className='formWrapper'>
          <div className="formArea">
            <div className="head">
              <h1>Welcome!</h1>
              <p>Enter details to login.</p>
            </div>

            <form>
              {/* Email Input */}
              <div className='inputField'>
                <input
                  className={`emailInput ${emailError ? 'inputError' : ''}`}
                  type="text"
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateEmail}
                />
                {emailError && <span className='error'>{emailError}</span>}
              </div>

              {/* Password Input */}
              <div className='inputField passwordInput'>
                <input
                  className={`passwordField ${passwordError ? 'inputError' : ''}`}
                  type={showPassword}
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={validatePassword}
                />
                <button className='showPasswordBtn' onClick={handleShowPassword}>show</button>
                {passwordError && <span className='error'>{passwordError}</span>}
              </div>

              {/* Forgot Password */}
              <button className='forgotPassword' type="button">forgot password?</button>

              {/* Login Button */}
              <button
                onClick={handleSubmit}
                className='loginBtn'
                type="submit"
              >
                log in
              </button>

              <span className='formError'><span>&nbsp;</span>{!formValid && <span className='formError'>Please fill all the fields above to proceed.</span>}</span>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Login;
