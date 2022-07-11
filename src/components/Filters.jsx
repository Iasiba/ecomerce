import React from 'react'
import FormFilter from './FormFilter'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import usehook from '../hooks/usehook'
import { setFilter } from '../store/slices/FilterSlice'
import { useSelector } from 'react-redux/es/exports'
import { setFilterProducts } from '../store/slices/ProductsFilterSlice'
import { setProductName } from '../store/slices/ProductNameSlice'
import { useState } from 'react'
const Filters = () => {
    const [FilterPrice, setFilterPrice] = useState(false)
    const [FilterCategory, setFilterCategory] = useState(false)
    const dispatch = useDispatch()
    const { data } = usehook()
    const Filter = useSelector(state => state.Filter)
    const FilterProducts = filter => {
        dispatch(setFilter(filter))
        //if(Filter!=""){
        console.log(Filter)
        //}

    }
    const setProducts = (Filter) => {
        if (Filter != "") {
            const ProductsFilter = data ? data.filter(e => e.category.name === Filter) : []
            dispatch(setFilterProducts(ProductsFilter))
            console.log(ProductsFilter)
        }
    }

    return (
        <aside className='Filters'>
            <h2 >Filter</h2>
            <div className='Price'onClick={()=>setFilterPrice(!FilterPrice)}>
                <h2 >Price</h2>
                { FilterPrice?<i className='bx bx-chevron-up'></i>:<i className='bx bx-chevron-down'></i>}
            </div>
            {FilterPrice&&<FormFilter />}
            <div className='Category'onClick={()=>setFilterCategory(!FilterCategory)}>
                <h2 >Category</h2>
                { FilterPrice?<i className='bx bx-chevron-up'></i>:<i className='bx bx-chevron-down'></i>}
            </div>
            {FilterCategory&&<ul>
                <Link to={''} className='Filter' onClick={() => dispatch(dispatch(setProductName("")))}>All Products</Link>
                <Link to={''} className='Filter' onClick={() => setProducts("Smart TV")}>Smart TV</Link>
                <Link to={''} className='Filter' onClick={() => setProducts("Computers")}>Computers</Link>
                <Link to={''} className='Filter' onClick={() => setProducts("Smartphones")}>Smartphones</Link>
            </ul>}
        </aside>
    )
}

export default Filters