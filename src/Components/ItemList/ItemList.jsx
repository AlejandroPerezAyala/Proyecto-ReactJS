import { useState, useEffect } from 'react'
import products from '../utils/ItemsMock'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../../FirebaseConfig'


const ItemList = () => {

  
  const { category } = useParams();
  
  //const productsFilter = newArray.filter((el) => el.category == category);
  
  const getProduct = async () => {
    try{
      if(!category)
      {
        const productsCollection = collection(db, "Productos");
        const productsSnapshot = await getDocs(productsCollection);
        const products = productsSnapshot.docs.map((doc) => {
            let product = doc.data();
            product.id = doc.id;
            return product
        })
        setProductList(products);
      } else {
        const colRef = collection(db, "Productos");
        const result = await getDocs(query(colRef, where("category", "==", category)));
        const productsFilter = result.docs.map((doc) => {
          let productFilter = doc.data();
          productFilter.id = doc.id;
          return productFilter;
        })
        setProductList(productsFilter);
      }
    }catch(err){
      console.log("error al cargar los datos");
     
    }
  } 

  // const getProduct = new Promise((resolve,reject) =>{
      
  //       if(category){
  //         resolve(productsFilter);
  //       } else {
  //         resolve(products)
  //       }
            
        
  // } )
    
  const [productList, setProductList] = useState([])  

  useEffect(() =>
    { 
        getProduct()

    }, [category])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {productList.map((product) => {
            return <Item key={product.id} data={product} />
        }) }
    </div>    
   
  )
}

export default ItemList