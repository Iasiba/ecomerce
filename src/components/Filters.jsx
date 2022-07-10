import React from 'react'
import FormFilter from './FormFilter'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import usehook from '../hooks/usehook'
import { setFilter } from '../store/slices/FilterSlice'
import { useSelector } from 'react-redux/es/exports'
import { setFilterProducts } from '../store/slices/ProductsFilterSlice'
const Filters = () => {
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
            <h2>Filter</h2>
            <div className='Price'>
                <h2>Price</h2>
                <i className='bx bx-chevron-up'></i>
            </div>
            <FormFilter />
            <div className='Category'>
                <h2>Category</h2>
                <i className='bx bx-chevron-up'></i>
            </div>
            <ul>
                <Link to={''} className='Filter' onClick={() => setProducts("")}>All Products</Link>
                <Link to={''} className='Filter' onClick={() => setProducts("Smart TV")}>Smart TV</Link>
                <Link to={''} className='Filter' onClick={() => setProducts("Computers")}>Computers</Link>
                <Link to={''} className='Filter' onClick={() => setProducts("Smartphones")}>Smartphones</Link>
            </ul>
        </aside>
    )
}

export default Filters