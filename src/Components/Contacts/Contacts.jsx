import Swal from 'sweetalert2'

const Contacts = () => {

    const submitContact = (e) => {
        e.preventDefault()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Pronto nos contactaremos. Muchas Gracias!!',
            showConfirmButton: false,
            timer: 1500
          })
    }

  return (

    
    <>
        <div>
            <p className="text-white text-3xl mb-5">Contactanos</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex bg-white w-full h-screen justify-center items-center">
                <form className='flex flex-col text-xl items-center'>
                    <div className='bg-white text-2xl border-collapse border-b-2 border-black pb-5'>
                        <p>INGRESA TUS DATOS PARA QUE TE CONTACTEMOS</p>
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label>Nombre completo:</label>
                        <input className="w-96"
                            type="text"
                            name="name"
                            placeholder="Nombre completo"
                        />
                        <label>Numero de contacto:</label>
                        <input className="w-96"
                            type="number" 
                            name='phone'
                            placeholder='Ingrese su numero de contacto'
                        />
                        <label>Email:</label>
                        <input className='w-96'
                            type="email" 
                            name='email'
                            placeholder='Ingrese su email'
                        
                        />
                    </div>
                    <button type='submit' className='bg-black text-white px-3 py-1 text-xl font-medium rounded-lg mt-2 w-60' onClick={submitContact}>Enviar</button>    
                </form>
            </div>
            <div className="bg-black object-cover">
                <img className="object-cover h-screen" src="Yellow Clean Contact Us Instagram Post.svg" alt="" />
            </div>
        </div>
        
    </>
  )
}

export default Contacts