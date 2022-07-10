import React, { useEffect } from 'react'
import Navbar from './Navbar'
import ProductCard from './ProductCard'
import FormSearch from './FormSearch'
import Foot from './Foot'
import FormFilter from './FormFilter'
import Filters from './Filters'
import axios from 'axios'
import getConfig from '../utils/getConfig'
const Shop = () => {
/*useEffect(() => {
        const URL="https://ecommerce-api-react.herokuapp.com/api/v1/users"
     axios.post(URL,{
        firstName: "isiba",
        lastName: "isibaisiba",
        email: "isiba@gmail.com",
        password: "pass1234",
        phone: "1234567891",
        role: "admin"
    },getConfig())
    }, [])//*/
    
    return (
        <section className='shop'>
            <Filters />
            <span className='Mostrador'>
                <FormSearch />
                <ProductCard />
            </span>
            <Foot />
        </section>
    )
}

export default Shop