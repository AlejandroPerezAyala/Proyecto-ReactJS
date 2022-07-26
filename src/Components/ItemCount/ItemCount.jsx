import { useState } from 'react'
import React from 'react'

const ItemCount = ({onAdd, initial, stock}) => {
    const [count, setCount] = useState(initial);


    const addCount = () => { 
        setCount(count + 1);
    }

    const removeCount = () => {
        setCount(count - 1);
    }



    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-xl font-medium'>stock: {stock}</p>
            <div className='grid w-56 h-auto grid-cols-3 items-center'>
                <button className='bg-black text-white p-2 text-xl font-bold rounded-tl-2xl rounded-bl-2xl' onClick={removeCount} disabled={count == initial ? true : null}>-</button>
                <p className='bg-white text-black font-bold p-1 text-2xl text-center border-t-black border-y-2 border-b-black disabled:hover:cursor-not-allowed'>{count}</p>
                <button className='bg-black text-white p-2 text-xl font-bold rounded-br-2xl rounded-tr-2xl' onClick={addCount} disabled={count == stock ? true : null}>+</button>
            </div>
            <button className='bg-black text-white px-3 py-1 text-xl font-medium rounded-lg mt-2' onClick={() => onAdd(count)} disabled={stock == 0 ? true : null} >Comprar</button>
        </div>
    )
}

export default ItemCount