import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useForm}from 'react-hook-form'
import axios from 'axios'
const Login = () => {
  const [isErrorLogin, setIsErrorLogin] = useState(false)
  const {handleSubmit, reset, register} = useForm()

  const navigate = useNavigate()

  const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {
        localStorage.setItem('token', res.data.data.token)
        navigate('/')
      })
      .catch(err => {
        localStorage.removeItem('token')
        setIsErrorLogin(true)
        setTimeout(() => {
          setIsErrorLogin(false)
        }, 5000)
      })
    reset({
      email: '',
      password: ''
    })
    
  }
  return (
    <form onSubmit={handleSubmit(submit)} className='Login'>
      <h2>Login</h2>
      <div>
        <div>Email</div>
        <input type="text"  {...register('email')}/>
      </div>
      <div>
        <div>Password</div>
        <input type="text"  {...register('password')}/>
      </div>
      <br />
      {
          isErrorLogin && 'Invalid credentials, try again...'
        }
      <button>Login</button>
      <div>Already have an account?<Link to='/singup'>.       Sing  Up</Link> </div>
    </form>
  )
}

export default Login