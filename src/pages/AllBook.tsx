/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Button } from '@material-tailwind/react';
import SingleCard from '../components/ui/SingleCard';
import { useGetBooksQuery } from '../redux/api/apiSlice';
import { IBook } from '../types/globalTypes';
import { useNavigate } from 'react-router-dom';
import { Input } from '@material-tailwind/react';
import { BsSearch } from 'react-icons/bs';
import { Select, Option } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hook';
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty-pattern
export default function AllBook({}) {

  const [allItem, setAllItem] = useState([]);
  const [filterData, seFilterData] = useState([]);
   const [query, setQuery] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  // const productsData = data?.data;
  // setAllItem(productsData);
  
  // const [holdItem, setHoldItem] = useState([]);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/addnewbook');
  };
const { user } = useAppSelector((state) => state.user);
  // console.log('productsData: ', productsData);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
     setAllItem(data?.data);
     // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
     seFilterData(data?.data);
    console.log('seFilterData ',filterData);
    
   
  }, [data?.data]);

  // console.log('holdItem', holdItem);

  // setHoldItem(data);
  // useEffect(() => {
  //   let filterData: any = [];
  //   filterData = productsData?.filter((i: any) =>
  //     i.author.toLowerCase().includes(searchItem)
  //   );
  //   setHoldItem(filterData);
  // }, [searchItem]);

  const handleSearch=(event:any)=>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const getSearch =event.target.value;
    console.log(
      getSearch
    )
   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
   setQuery(getSearch);


   if(getSearch.length > 0){
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const getSearch=event.target.value;
const searchdata= allItem.filter( (item:any) => item.author.toLowerCase().includes(getSearch));
 setAllItem(searchdata)
  } else{
    setAllItem(filterData)
  }

  }


  return (
    <div className='mt-6'>
      <div className="flex justify-between mb-8">
          {user?.email && (
              <Button onClick={handleNavigate}>Add Book</Button>
            )}
        
        <div className="w-72">
          <Input
            // onChange={(e) => setSearchItem(e.target.value.toLowerCase())}
            // onChange={(e) => setSearch(e.target.value)}
            label="Search by title, author and genre"
           defaultValue={query}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
           onChange={(e:any)=>handleSearch(e)}
            icon={<BsSearch />}
          />
        </div>
        <div className="w-72">
          <Select label="Filter by genre and year">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
          </Select>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {allItem?.map((card: IBook) => (
          <SingleCard card={card} />
        ))}
      </div>
    </div>
  );
}
