import React from 'react'
import {useForm}from 'react-hook-form'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import {setProductName} from '../store/slices/ProductNameSlice'
import {useNavigate }from 'react-router-dom'
const FormSearch = () => {
  const {handleSubmit,register,reset} =useForm()
  const dispatch=useDispatch()
  const navigate = useNavigate()


  const submit = data => { 
    console.log(data,"%%%")
    dispatch(setProductName(data.searchProduct))
    navigate('/product')
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='ProductSearch'>
        <input type="text" placeholder='Ej. Apple 2021' {...register('searchProduct')} />
        <button><i className='bx bx-search' ></i></button>
    </form>
  )
}

export default FormSearch