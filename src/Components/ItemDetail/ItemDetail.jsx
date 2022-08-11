import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {

    const [qty, setQty] = useState(0);

    


  return (
    <div className=' grid md:grid-cols-2 '>
        <div className=' border-collapse border-black border-2'>
            <img src={`/${data.image}`} alt="" className=' w-full object-cover'/>
        </div>
        <div className='border-collapse flex flex-col bg-white border-black border-2'>
            <h1 className=' font-extrabold text-3xl m-4 text-left'>Detalle:</h1>
            <div className='flex justify-center flex-col'>
                <h2 className=' font-extrabold text-3xl text-center m-4'>{data.title}</h2>
                <p className=' font-medium text-xl text-center'>Zapatos de cuero hermosos</p>
                <p className=' font-medium text-xl text-center'>Precio: {`$ ${data.price}`}</p>
                <div className='flex justify-center'>
                    {qty > 0 ? <Link to='/cart'><button className='bg-black text-white px-3 py-1 text-xl font-medium rounded-lg mt-2 w-60'>Terminar compra</button></Link> : <ItemCount initial={1} stock={data.stock} setQty={setQty} productData={data}/>}
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default ItemDetail