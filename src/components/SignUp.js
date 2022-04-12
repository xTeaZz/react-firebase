import React, { useRef } from "react"
import { auth } from "../utils/firebase.config"

const SignUp = () => {
  const registerEmail = useRef()
  const registerPassword = useRef()

  const handleRegister = (e) => {
    e.preventDefault()

    try {
      auth.createUserWithEmailAndPassword(
        registerEmail.current.value,
        registerPassword.current.value
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <div className='signup-container'>
        <div className='signup'>
          <h3>Sign Up</h3>
          <form onSubmit={(e) => handleRegister(e)}>
            <input type='text' placeholder='Nickname' required />
            <input
              type='email'
              placeholder='Email'
              required
              ref={registerEmail}
            />
            <input
              type='password'
              placeholder='password'
              required
              ref={registerPassword}
            />
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
