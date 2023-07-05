
import ServiceCard from "../../components/ServiceCard";
import { useLoaderData } from "react-router-dom";


const Home = () => {

   const service = useLoaderData();

   return (
      <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
         <div className="text-center space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-5xl">Explore Our Storage Space, Co-Working Space, <br /> Co-Warehouse & Services</h2>
            <p>Carefully crafied for a hassle and affordable experience </p>
         </div>

         <div className="grid md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 mt-10 md:mt-16">
            {service.map(item => <ServiceCard key={item.id} item={item} />)}
         </div>

      </div>
   );
};

export default Home;