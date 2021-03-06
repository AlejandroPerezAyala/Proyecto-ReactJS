import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../utils/ItemsMock'

const ItemDetailContainer = ({id}) => {

    const [item, setItem] = useState('');
    
    const getItemByID = (id, productList) => productList.find((el) => (el.id === id));


    const getProductDetail = new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(products)
        }, 2000) 
  } )

  useEffect(() => {
    getProductDetail
    .then((res) => {
        setItem(getItemByID(id, res))
    })
    .catch((err) => {
        console.log("no se pudo cargar el detalle")
    })
  }, [id]) 
  

  return (
    <ItemDetail data={item}/>
  )
}

export default ItemDetailContainer