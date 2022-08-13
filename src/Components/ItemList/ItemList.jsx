import { useState, useEffect } from 'react'
import products from '../utils/ItemsMock'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'

const ItemList = () => {

  
  const { category } = useParams();
  const productsFilter = products.filter((el) => el.category == category);
  
  const getProduct = new Promise((resolve,reject) =>{
      
        if(category){
          resolve(productsFilter);
        } else {
          resolve(products)
        }
            
        
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
    }, [productsFilter])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {productList.map((product) => {
            return <Item key={product.id} data={product} />
        }) }
    </div>    
   
  )
}

export default ItemList