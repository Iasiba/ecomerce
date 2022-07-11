import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { setProductName } from '../store/slices/ProductNameSlice'
import { useNavigate } from 'react-router-dom'
import usehook from '../hooks/usehook'
import { setFilterProducts } from '../store/slices/ProductsFilterSlice'
import { useEffect } from 'react'
const FormSearch = () => {
  const { handleSubmit, register, reset } = useForm()
  const ProductName=useSelector(state=>state.Name)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data: Data } = usehook()
let aux=[]

  const submit = data => {
    console.log(data, "%%%")
    dispatch(setProductName(data.searchProduct))
    //if (Data) {
   // }
    //console.log(useSelector(state => state.))
    //navigate('/product')
  }
  useEffect(() => {
    if(ProductName!=""){
      for (let i = 0; i < Data.length; i++) {
        if (Data[i].title.toLowerCase().includes(ProductName.toLowerCase())) {
          console.log(Data[i])
          aux.push(Data[i])
        }
      }
      dispatch(setFilterProducts(aux))
      aux=[]
    }else{
      dispatch(setFilterProducts(Data))
      console.log("todos los productos ")
    }
  }, [ProductName])
  

  return (
    <form onSubmit={handleSubmit(submit)} className='ProductSearch'>
      <input type="text" placeholder='Ej. Apple 2021' {...register('searchProduct')} />
      <button><i className='bx bx-search' ></i></button>
    </form>
  )
}

export default FormSearch