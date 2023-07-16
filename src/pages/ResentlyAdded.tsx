/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useGetRecentBooksQuery } from '../redux/api/apiSlice';
import { IBook } from '../types/globalTypes';
import SingleCard from '../components/ui/SingleCard';

export default function ResentlyAdded() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data, isLoading, error } = useGetRecentBooksQuery(undefined);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const productsData = data?.data;
  return (
    <div> <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
       
        {productsData?.map((card: IBook) => (
          <SingleCard card={card} />
        ))}
      </div></div>
  )
}
