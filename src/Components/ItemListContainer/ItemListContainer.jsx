import React from 'react'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({title}) => {

  return (
    <div className='flex flex-col justify-center '>
        <p className='text-3xl font-medium m-5'>{title}</p>
        <ItemList />
    </div>
  )
}

export default ItemListContainer