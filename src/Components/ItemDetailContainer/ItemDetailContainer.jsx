import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../utils/ItemsMock'
import Loader2 from '../Loaders/Loader2';

const ItemDetailContainer = () => {

    const [item, setItem] = useState('');
    const [loader, setLoader] = useState(true);

    const {id} = useParams();
    
    const getItemByID = (id, productList) => productList.find((el) => (el.id == id));


    const getProductDetail = new Promise((resolve,reject) =>{
       
          resolve(products)
        
  } )

  setTimeout(() => {
    setLoader(false);
  }, 1500);

  
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
    <>
      {loader ? <Loader2 /> : <ItemDetail data={item}/>}
    </>
    
  )
}

export default ItemDetailContainer