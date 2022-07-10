import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import usehook from '../hooks/usehook'
import ProductCard from './ProductCard'
import { setId } from '../store/slices/IdSlice'
import { setProductName } from '../store/slices/ProductNameSlice'
import { setFilterProducts } from '../store/slices/ProductsFilterSlice'

const Imgs = ['', 'second-img', 'third-img']

const ProductScreen = () => {
    const dispatch = useDispatch()
    const { data } = usehook()
    console.log(data)
    const [product, setProduct] = useState()
    const [CurrentIndex, setCurrentIndex] = useState(0)
    const filter = data ? data.filter(e => e.category.name === product?.category) : []
    dispatch(setFilterProducts(filter))
    console.log(filter)
    //const {Id} = useParams()
    //busqueda de producto por nombre
    const name = useSelector(state => state.Name)
    console.log(name)
    if (name && data) {
        for(let i=0; i<data.length;i++){
            if(data[i].title.toLowerCase().includes(name.toLowerCase())){
                console.log(data[i])
                dispatch(setId(data[i].id))
            }
        }
        dispatch(setProductName(""))
    }
    const id = useSelector(state => state.Id)
    console.log(id)
    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
            .then(res => setProduct(res.data.data.product))
            .catch(err => console.log(err))
    }, [id])

    const clickPrev = () => {
        const prev = CurrentIndex - 1
        if (prev < 0) {
            setCurrentIndex(Imgs.length - 1)
        } else {
            setCurrentIndex(prev)
        }
    }

    const clickNext = () => {
        const next = CurrentIndex + 1
        if (next >= Imgs.length) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(next)
        }
    }

    return (
        <div className='product'>
            <div className='slider'>
                <div onClick={clickPrev} className='slider__prev'>&#60;</div>
                <div className={`slider__container ${Imgs[CurrentIndex]}`}>
                    {
                        product?.productImgs.map(imgSrc => (
                            <img
                                key={imgSrc}
                                src={imgSrc}
                                alt=""
                                className='slider__imgs'
                            />
                        ))
                    }
                </div>
                <div onClick={clickNext} className='slider__next'>&#62;</div>
                <div className='puntitos-container'>
                    <div
                        onClick={() => setCurrentIndex(0)}
                        className={CurrentIndex === 0 ? 'puntitos puntitos__active' : 'puntitos'}
                    ></div>
                    <div
                        onClick={() => setCurrentIndex(1)}
                        className={CurrentIndex === 1 ? 'puntitos puntitos__active' : 'puntitos'}
                    ></div>
                    <div
                        onClick={() => setCurrentIndex(2)}
                        className={CurrentIndex === 2 ? 'puntitos puntitos__active' : 'puntitos'}
                    ></div>
                </div>
            </div>
            <article className='product-info'>
                <h2 className='product-info__title'>{product?.title}</h2>
                <p className='product-info__description'>{product?.description}</p>
                <br />
                <div className='card-product__price-container'>
                    <h3 className='card-product__price-label product-info__label'>Price</h3>
                    <p className='card-product__price-number product-info__number'>$ {product?.price}</p>
                </div>
                <br />
                <div className='product-info__quantity-container'>
                    {/*
                        <div onClick={minusOne} className='product-info__minus'>-</div>
                        <div>{counter}</div>
                        <div onClick={plusOne} className='product-info__plus'>+</div>
                    */}
                </div>
                <button>{" Add to Cart "} <i className="fa-solid fa-cart-plus"></i></button>
                <br />
            </article>
            {/**
               <ProductInfoId product={product} />
               <SimilarProducts product={product} />
             */

                filter && <ProductCard />
            }
        </div>
    )
}

export default ProductScreen