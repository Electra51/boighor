/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Button } from "@material-tailwind/react";
import SingleCard from "../components/ui/SingleCard";
import { useGetBooksQuery } from "../redux/api/apiSlice"
import { IBook } from "../types/globalTypes";
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty-pattern
export default function AllBook({}) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
  const{data,isLoading,error}=useGetBooksQuery(undefined);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log(data?.data)
  console.log(isLoading)
console.log(error)

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const productsData= data?.data;
const navigate = useNavigate();

const handleNavigate =()=>{
navigate('/addnewbook');
}
  return (
     <div>
      <div className="flex justify-between">
<Button onClick={handleNavigate}>Button</Button>
Filtering
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
  
        {productsData?.map((card: IBook) => (
          <SingleCard card={card} />
        ))}
      </div>
     </div>
  )
}
