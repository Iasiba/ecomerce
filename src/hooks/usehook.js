import { useEffect, useState } from 'react'
import axios from 'axios'

const data=(Quant=1)=> {
  const [data, setData] = useState('')
  useEffect( ()=>{
    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
 .then(res=>setData(res.data.data.products) )//setData(res.data.results))
 .catch(err=> console.log(err))},[])
 return {data}
}
export default data