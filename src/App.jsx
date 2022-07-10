import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from "./components/ProductCard.jsx"
import { useDispatch, useSelector } from 'react-redux/es/exports.js'
import { setLogin } from './store/slices/LoginSlice.js'
import {
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom'
import Rutas from './router/Rutas.jsx'
import './App.css'
import SingUp from './components/SingUp.jsx'
import Navbar from './components/Navbar.jsx'
import Foot from './components/Foot.jsx'
function App() {
  /*const [users, setUsers] = useState('')
  useEffect(()=>{
    axios.get(`https://randomuser.me/api/?results=${Math.floor(Math.random()*100)}`)
    .then(res=>setUsers(res.data.results))
    .catch(err=>console.log(err))
  },[])*/
  //users?console.log(users):''
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()
  const setlogin = () => dispatch(setLogin(true))
  return (
    <div className="App">
      <Navbar />
      <Rutas />
      {/* <UserCard /><UserCard Quan={6} />  */}
      
    </div>
  )
}

export default App
