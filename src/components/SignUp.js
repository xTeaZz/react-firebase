import React, { useRef, useState } from "react"
import { auth } from "../utils/firebase.config"

const SignUp = () => {
  const registerEmail = useRef()
  const registerPassword = useRef()
  const [displayName, setDisplayName] = useState("")

  const handleRegister = (e) => {
    e.preventDefault()

    try {
      auth
        .createUserWithEmailAndPassword(
          registerEmail.current.value,
          registerPassword.current.value
        )
        .then(async (userAuth) => {
          await userAuth.user.updateProfile({
            displayName,
          })
          window.location.reload()
        })
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
            <input
              type='text'
              placeholder='Nickname'
              required
              onChange={(e) => setDisplayName(e.target.value)}
            />
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
