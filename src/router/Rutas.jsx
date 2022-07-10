import React from 'react'
import {
    Routes,
    Route,
    Navigate,
    Link
} from 'react-router-dom'
import Shop from '../components/Shop'
import Login from '../components/Login'
import SingUp from '../components/SingUp'
import User from '../components/User'
import { Purchases } from '../components/Purchases'
import Cart from '../components/Cart'
import Logged from '../components/Logged'
import Product from '../components/Product'
const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Shop/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/purchases" element={<Purchases/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/product/:id" element={<h2>product:id</h2>} />
            <Route path="/shop/:id" element={<h2>shop:id</h2>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/singup" element={<SingUp/>} />
            <Route path="/user" element={<User/>} />
            <Route path="/logged" element={<Logged/>} />
        </Routes>
    )
}

export default Rutas