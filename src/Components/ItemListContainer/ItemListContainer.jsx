import React from 'react'

const ItemListContainer = ({title}) => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <p className='text-3xl font-medium'>{title}</p>
    </div>
  )
}

export default ItemListContainer