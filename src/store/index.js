import { configureStore } from '@reduxjs/toolkit'
import user from './slices/UserSlice'
import login from './slices/LoginSlice'
import Id from './slices/IdSlice'
import Name from './slices/ProductNameSlice'
import Filter from '../store/slices/FilterSlice'
import ProductsFilter from './slices/ProductsFilterSlice'
export default configureStore({
    reducer: {
        user,
        login,
        Id,
        Name,
        Filter,
        ProductsFilter
    }
})