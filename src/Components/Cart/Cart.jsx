import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {

  const {cartProducts, clear, removeItem} = useContext(CartContext);
  console.log(cartProducts.length);

  return(
    <>
      <div className='flex justify-between'>
        <p className='text-3xl text-white mb-3'>CHECKOUT</p>
        <button onClick={clear} className='bg-red-400 w-24 h-10 rounded-lg hover:bg-red-500 flex justify-center items-center mr-6 text-base font-medium'>Vaciar</button>
      </div>
      
      {cartProducts.length <= 0 ? <div className='w-screen h-screen text-black text-3xl bg-white flex justify-center items-center'>
                                    <p>NO HAY PRODUCTOS EN EL CARRO</p>
                                  </div> :
                                  < div className='bg-white'>
                                    {cartProducts.map((product) => {
                                          return (
                                          <div className=' w-screen bg-white' key={product.id}> 
                                            <table className="w-full text-left text-black text-3xl table-fixed">
                                              <thead className='flex justify-between ml-8'>
                                                <tr className='flex justify-evenly'>
                                                  <th scope="col" className=' pr-64'>Producto</th>
                                                  <th scope="col" className=' pr-64'>cantidad</th>
                                                  <th scope="col" className=' pr-64'>precio unitario</th>
                                                  <th scope="col" className=' pr-64'>precio total</th>
                                                </tr>
                                              </thead>
                                              <tbody className='flex justify-between m-5'>
                                                <tr className='flex items-center'>
                                                  <th scope='row' className='flex flex-col justify-center items-center ml-5 pr-72'>
                                                    <img className=' w-28 h-28  object-cover' src={`/${product.image}`} alt="" />
                                                    <span>{product.title}</span>
                                                  </th>
                                                  <td className=' pr-56 mr-36'>{product.cantidad}</td>
                                                  <td className=' pr-56 mr-36'>{`$${product.price}`}</td>
                                                  <td className=' pr-56 mr-36'>{`$${product.price * product.cantidad}`}</td>
                                                  <td>
                                                    <button onClick={()=>removeItem(product.id)} className='bg-red-400 w-10 h-10 rounded-lg hover:bg-red-500 flex justify-center items-center'>
                                                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                      </svg>
                                                    </button>
                                                  </td>

                                                </tr>
                                              </tbody>
                                            </table>
                                          </div> 
                                        )
                                      })}
                                  </div>
                                  }
          
          <div className='bg-white'><hr className=" border-black  border-2 m-2 sm:mx-auto" /></div>
          
    </>
  )
  
  
}

export default Cart