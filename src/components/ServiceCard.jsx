import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

const ServiceCard = ({ item }) => {

   const { image, title, service } = item;
   return (
      <div className="card w-60 h-60 bg-base-100 shadow-md rounded-md overflow-hidden">
         <div className="card-body ">
            <figure><img src={image} alt="Shoes" /></figure>
            <h2 className="text-base font-bold">{title}</h2>
            <p><small>{service}</small></p>
            <div className='flex gap-2 '>
               <h2 className="text-blue-700  ">Learn More</h2>
               <ArrowSmallRightIcon className="h-6 w-6 text-blue-500 hover:bg-slate-400 rounded-full" />
            </div>
         </div>
      </div>
   );
};

export default ServiceCard;