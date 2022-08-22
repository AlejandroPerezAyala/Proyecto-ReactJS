import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import db from '../../FirebaseConfig';
import Loader2 from '../Loaders/Loader2';
import { doc, getDoc } from 'firebase/firestore';
const ItemDetailContainer = () => {

    const [item, setItem] = useState('');
    const [loader, setLoader] = useState(true);

    const {id} = useParams();
    

    const getProductDetail = async () => {
      const docRef = doc(db, "Productos", id);
      const docSnapshot = await getDoc(docRef);
      let product = docSnapshot.data();
      product.id = docSnapshot.id;
      return product
    }
  

  setTimeout(() => {
    setLoader(false);
  }, 1500);

  
  useEffect(() => {
    getProductDetail()
    .then((res) => {
        setItem(res);
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