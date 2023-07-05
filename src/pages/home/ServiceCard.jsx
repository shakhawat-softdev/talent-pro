import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Roll from 'react-reveal/Roll';
const ServiceCard = ({ item }) => {

   const { image, title, service } = item;
   return (

      <Roll bottom>
         <div className="card w-[200px] h-[280px] bg-base-100 shadow-md rounded-md overflow-hidden hover:bg-slate-100">
            <div className="card-body ">
               <figure><img src={image} alt="Shoes" /></figure>
               <h2 className="text-base font-bold">{title}</h2>
               <p><small>{service}</small></p>
               <div className='flex gap-2 '>
                  <Link className='flex gap-2 hover:bg-slate-300 p-1 rounded-md'>
                     <h2 className="text-blue-700  ">Learn More</h2>
                     <ArrowSmallRightIcon className="h-6 w-6 text-blue-500 " />
                  </Link>
               </div>
            </div>
         </div>
      </Roll>


   );
};

export default ServiceCard;