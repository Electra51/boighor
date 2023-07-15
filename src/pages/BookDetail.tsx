/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Typography
} from "@material-tailwind/react";
import { useGetBookDetailQuery } from "../redux/api/apiSlice";
import { useParams } from "react-router-dom";
 
export default function BookDetail() {
  const {id}=useParams();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
  const {data, isLoading,error}= useGetBookDetailQuery(id);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log('kk',data)
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
  
  <div ><img 
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          src={data?.image}
          className="w-full h-full object-cover"
        /></div>
  <div > <Typography variant="h4" color="blue-gray" className="mb-2">
         
         {data?.title}
        </Typography>
        <Typography color="gray" className="font-normal mb-8">
         Author: {data?.author}
        </Typography>
         <Typography color="gray" className="font-normal mb-8">
         publication Date: {data?.publication_date}
        </Typography></div>
</div>
     
    </div>
  )
}
