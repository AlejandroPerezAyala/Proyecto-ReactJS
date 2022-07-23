import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({title}) => {

  const onAdd = (count) =>{
    alert(`Compraste ${count} productos`);
  }

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
        <p className='text-3xl font-medium'>{title}</p>
        <ItemCount initial= {1} stock= {10} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer