import React from 'react'
import { useForm } from 'react-hook-form'
const FormFilter = () => {
  const { handleSubmit, register, reset } = useForm()
  const defaultValuesForm = {
    birthday: "1001-11-10",
    email: "a@algo.com",
    first_name: "a",
    last_name: "a",
    password: "asds"
  }
  //reset(defaultValuesForm)
  const submit = (data) => {

  }
  //<input type="date" id='date' {...register('birthday')} />
  return (
    <form onSubmit={handleSubmit(submit)} className='FilterSearch'>
      <div>
        <label htmlFor="PriceLow">From</label>
        <input type="text" id='PriceLow' placeholder=' 0 ' />
      </div>
      <div>
        <label htmlFor="PriceHigh">To</label>
        <input type="text" id='PriceHigh' placeholder='10000' />
      </div>
      <button>filter price</button>
    </form>
  )
}

export default FormFilter