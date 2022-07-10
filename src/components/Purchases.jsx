import React, { useEffect, useState } from 'react'
import axios from 'axios'
import getConfig from '../utils/getConfig'
export const Purchases = () => {

    const [purchases, setPurchases] = useState()

    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        axios.get(URL, getConfig())
            .then(res => setPurchases(res.data.data.purchases))
            .catch(err => console.log(err))
    }, [])
    console.log(purchases)
    return (
        <section className='purchases'>
            {
                purchases?.map(purch =>
                    <div className="purchase-item items" key={purch.id}>
                        <div className="header"><b>{purch.updatedAt}</b></div>
                        <ul className="purchase-products-list">
                            <li className="items">
                                <div className="image"></div>
                                {purch.cart.products.map(product =>
                                    <div key={product.id} className="item">
                                        <div className="name">{product.title}</div>
                                        <div className="quant">
                                            <div className="box">{product.productsInCart.quantity}</div>
                                            <div className="price">{product.price}</div>
                                        </div>
                                        
                                    </div>
                                )
                                }
                            </li>
                        </ul>
                    </div>
                )
            }
        </section>
    )
}
