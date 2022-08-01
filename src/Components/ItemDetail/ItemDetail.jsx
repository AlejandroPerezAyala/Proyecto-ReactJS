import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'

const ItemDetail = ({data}) => {

    const onAdd = (count) =>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Compraste ${count} productos`,
            showConfirmButton: false,
            timer: 1500,
            toast: true
          })
       // alert(`Compraste ${count} productos`);
    }  


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
                <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
            </div>
            
        </div>
        
    </div>
  )
}

export default ItemDetail