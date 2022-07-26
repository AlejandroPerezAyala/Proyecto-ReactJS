import { useState, useEffect } from 'react'
import products from '../utils/ItemsMock'
import Item from '../Item/Item'

const ItemList = () => {

  const getProduct = new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(products)
        }, 2000) 
  } )
    
  const [productList, setProductList] = useState([])  

  useEffect(() =>
    { 
        getProduct
        .then((res) => {
            setProductList(res)
        })
        .catch((err)=> {
            console.log("error al cargar los productos")
        })
    }, [])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {productList.map((product) => {
            return <Item key={product.id} data={product} />
        }) }
    </div>    
   
  )
}

export default ItemList