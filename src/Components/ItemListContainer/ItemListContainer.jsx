import React from 'react'
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loaders/Loader';


const ItemListContainer = ({title}) => {

  const [loader, setLoader] = useState(true);

  setTimeout(()=>{
    setLoader(false);
  }, 5000)

  return (
    <>
    {loader ? <Loader /> :<div className='flex flex-col justify-center'>
        <p className='text-3xl font-medium m-5 text-white'>{title}</p>
        <ItemList />
    </div> }
    </>
  )
}

export default ItemListContainer