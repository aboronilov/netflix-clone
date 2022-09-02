import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from '../context/firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../lib/firebase.prod';

export default function Signup() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const {user} = await createUserWithEmailAndPassword(auth, emailAddress, password);
      await updateProfile(user, {
        diplayName: firstName,
        photoURL: Math.floor(Math.random() * 5) + 1,
      })      
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setFirstName("");
      setError(error.message)
    }
    navigate(ROUTES.BROWSE);
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">

            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />

            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <Form.Input
              placeholder="Password"
              type="password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to={ROUTES.SIGNIN}>Sign in now</Form.Link>
            </Form.Text>

            <Form.TextSmall>
              Thist page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more
            </Form.TextSmall>

          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
