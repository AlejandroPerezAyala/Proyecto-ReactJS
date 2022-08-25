import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import db from '../../FirebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'

const CartForm = () => {
  
    const {cartProducts, getTotalPrice, clear} = useContext(CartContext);

    const [order, setOrder] = useState({
        items: cartProducts.map((product)=>{
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                cantidad: product.cantidad
            }
        }),
        buyers: {},
        total: getTotalPrice()
    })

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    })

    const handleChange = (e) =>{
        
        setFormData({...formData, [e.target.name]: e.target.value})
        
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, "Ordenes");
        const orderDoc = await addDoc(collectionOrder, newOrder);
        setTimeout(()=>{Swal.fire(
                    'Muchas Gracias!',
                    `Orden de compra creada con exito.
                     ID de compra: ${orderDoc.id}` ,
                    'success'
                )}, 1000) 
    }

    const submitData = (e) =>{
        e.preventDefault()
        Swal.fire({
            title: 'Seguro queres comprar?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#000000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero comprar!',
            cancelButtonText: 'NO! me equivoque'
          }).then((result) => {
            if (result.isConfirmed) {
                pushData({...order, buyers: formData}) 
                clear();
            }
          })
        
    }

    

    return (
        <>
        <div className='text-white text-3xl bg-black w-screen'>CheckOut</div>
        
        <div className='bg-white w-screen h-screen flex justify-center items-center py-10'>
            <form onSubmit={submitData} className='flex flex-col text-xl items-center'>
                <div className='bg-white text-3xl border-collapse border-b-2 border-black pb-5'>
                    <p>INGRESA TUS DATOS PARA GENERAR LA COMPRA</p>
                </div>
                <div className='flex flex-col pt-5'>
                    <label htmlFor="">Nombre Completo:</label>
                    <input className=' w-96'
                        type="text" 
                        name='name'
                        placeholder='Ingrese su nombre completo'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Numero de contacto:</label>
                    <input className=' w-96'
                        type="number" 
                        name='phone'
                        placeholder='Ingrese su numero de contacto'
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Email:</label>
                    <input className=' w-96'
                        type="email" 
                        name='email'
                        placeholder='Ingrese su email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Direccion:</label>
                    <input className=' w-96'
                        type="text" 
                        name='address'
                        placeholder='Ingrese su direccion'
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit' className='bg-black text-white px-3 py-1 text-xl font-medium rounded-lg mt-2 w-60'>Finalizar Compra</button>
            </form>
            
        </div>
        </>

    )
}

export default CartForm