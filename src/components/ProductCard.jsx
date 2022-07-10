import axios from 'axios'
import React, { useEffect, useState } from 'react'
import usehook from '../hooks/usehook'
import getConfig from '../utils/getConfig'
import { useDispatch } from 'react-redux/es/exports'
import { setId } from '../store/slices/IdSlice'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { setFilterProducts } from '../store/slices/ProductsFilterSlice'
const ProductCard = () => {//{productsFilter}
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data, setdata] = useState()
  const allproducts=usehook().data
  
  
  const [productsFilter, setProductsFilter] = useState(null)
  const productsFilt = useSelector(state => state.ProductsFilter)
  console.log(productsFilt, "productos filtrados global")
  if (productsFilt) {
    //if (productsFilter == null) 
    setProductsFilter(productsFilt)
    dispatch(setFilterProducts(null))
  }
  if(productsFilt==[]){
    setProductsFilter(null)
    dispatch(setFilterProducts(null))
  }
  console.log(productsFilter, "local")
  
  useEffect(() => {
    productsFilter ? setdata(productsFilter) : setdata(allproducts)
  }, [productsFilter, productsFilt, allproducts])
  /*const Data = productsFilter ? productsFilter : allproducts

  useEffect(() => {
    productsFilter ? setdata(productsFilter) : setdata(Data)
  }, [productsFilter, Data, productsFilt])

*/

  const addToCart = (id) => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart"
    axios.post(URL, { id: id, quantity: 1 }, getConfig())
      .then(data => console.log(data))
  }
  const ViewProduct = (id) => {
    dispatch(setId(id))
    navigate(`/product/`)
  }

  console.log(data)
  return (
    <section className='Products'>
      {
        data && data?.map(product => (
          <div className='Product' key={product.id}>
            <img src={product.productImgs[0]} alt="" onClick={() => ViewProduct(product.id)} className='ImgProduct' />
            <div className='ProductInfo'>
              <b>{product.title}</b>
              <p>Price</p>
              <p>${product.price}</p>
            </div>
            <div className='Cart' onClick={() => addToCart(product.id)}><i className='bx bxs-cart'></i></div>
          </div>))
      }

    </section>
  )
}

export default ProductCard