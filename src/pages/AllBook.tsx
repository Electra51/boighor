/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import SingleCard from "../components/ui/SingleCard";
import { useGetBooksQuery } from "../redux/api/apiSlice"
import { IBook } from "../types/globalTypes";


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
  return (
     <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
  
        {productsData?.map((card: IBook) => (
          <SingleCard card={card} />
        ))}
      </div>
  )
}
