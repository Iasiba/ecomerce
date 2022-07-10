import React, { useEffect, useState } from 'react'
import axios from 'axios'
import getConfig from '../utils/getConfig'
const Cart = () => {
    const [cart, setCart] = useState()
    const [total, setTotal] = useState(0)
    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, getConfig())
            .then(res => setCart(res.data.data.cart.products))
            .catch(err => console.log(err))
        console.log(total)
    }, [total])

    if (!total && cart) {
        let aux = 0
        for (let i = 0; i < cart.length; i++) {
            aux += parseInt(cart[i].price * cart[i].productsInCart.quantity)
            console.log(cart[i])
        }
        setTotal(aux)
    }
    const buy = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const objPurchase = {
            street: "Green St. 1456",
            colony: "Southwest",
            zipCode: 12345,
            city: "USA",
            references: "Some references"
        }
        axios.post(URL, objPurchase, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(setCartGlobal(null))
            })
            .catch(err => console.log(err.data))
        setTotal(0)
    }
    if (total == 0) {
        buy();
        setTotal(1)
    }
    const deleteProductFromCart = (id) => {
        console.log(id)
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`
        axios.delete(URL, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err.data))
    }
    return (
        cart && <div className="cart-modal">
            <div className="cart">
                <div className="minimalist-scrollbar">
                    <h4>Carrito de compras</h4>
                    <ul className="cart-products-list">
                        {
                            cart?.map(product => (
                                <li key={product.id}>
                                    <div className="product-info">
                                        <div className="details">
                                            <span className="brand">{product.brand}</span>
                                            <a className="name" href="#/product/3">{product.title}</a>
                                            <div className="quantity">{product.productsInCart.quantity}</div>
                                        </div>
                                        <div className="button-delete">
                                            <button onClick={() => (setTotal(total - product.price * product.productsInCart.quantity), deleteProductFromCart(product.id))}><i className='bx bx-trash'></i></button>
                                        </div>
                                    </div>
                                    <div className="total">
                                        <span className="label">Total: </span>
                                        <b>{product.price * product.productsInCart.quantity}</b>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="checkout-section">
                    <div className="total">
                        <span className="label">Total:</span>
                        <b>${total}</b>
                    </div>
                    <button className="buy_button" onClick={buy}>Buy</button>
                </div>
            </div>

        </div>
    )
}

export default Cart