import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";
import {Link} from 'react-router-dom'

const Item = ({data}) => {

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
    <div className="flex items-center justify-center flex-col w-auto h-auto mb-3 hover:drop-shadow-xl">
        <figure className="bg-transparent flex-col">
            <img src= {`/${data.image}`} alt="" className="rounded-t-xl border-collapse border-2 border-black object-cover h-96 w-96"/>
            <figcaption className="text-lg text-white bg-black text-center border-b-2 border-white">{data.title}</figcaption>
            <p className="text-lg text-white bg-black text-center rounded-b-xl">${data.price}</p>
            <div className="flex justify-center">
              <Link to={`/productos/${data.id}`}><button className="text-white text-lg font-medium bg-black w-32 py-1 mt-2 rounded-lg border-white border-2 hover:bg-slate-50 hover:text-black hover:border-black">Detalles</button></Link>
            </div>
            
        </figure>
    </div> 
  )
}

export default Item