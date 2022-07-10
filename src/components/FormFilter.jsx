import React from 'react'
import { useForm } from 'react-hook-form'
import usehook from '../hooks/usehook'
import {useDispatch} from 'react-redux'
import { setFilterProducts } from '../store/slices/ProductsFilterSlice'
const FormFilter = () => {
  const { handleSubmit, register, reset } = useForm()
  const defaultValuesForm = {
    birthday: "1001-11-10",
    email: "a@algo.com",
    first_name: "a",
    last_name: "a",
    password: "asds"
  }
  const dispatch=useDispatch()
  const {data}=usehook()
  //reset(defaultValuesForm)
  console.log(data)
  const submit = (dataFilter) => {
    const ProductsFilter = []
    for(let i=0;i<data.length;i++){
      if(dataFilter.PriceLow<=parseInt(data[i].price)&&parseInt(data[i].price)<=dataFilter.PriceHigh){
        ProductsFilter.push(data[i])
      }
    }
    
     console.log(dataFilter,ProductsFilter)
    dispatch(setFilterProducts(ProductsFilter))
  }
  //<input type="date" id='date' {...register('birthday')} />
  return (
    <form onSubmit={handleSubmit(submit)} className='FilterSearch'>
      <div>
        <label htmlFor="PriceLow">From</label>
        <input type="text" id='PriceLow' placeholder=' 0 ' {...register('PriceLow')} />
      </div>
      <div>
        <label htmlFor="PriceHigh">To</label>
        <input type="text" id='PriceHigh' placeholder='10000' {...register('PriceHigh')} />
      </div>
      <button>filter price</button>
    </form>
  )
}

export default FormFilter