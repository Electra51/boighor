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
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty-pattern
export default function AllBook({}) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const productsData = data?.data;
  const [searchItem, setSearchItem] = useState('');
  const [holdItem, setHoldItem] = useState([]);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/addnewbook');
  };

  console.log('productsData: ', productsData);

  useEffect(() => {
    setHoldItem(productsData);
    console.log('DAta Set');
  }, []);

  console.log('holdItem', holdItem);

  // setHoldItem(data);
  useEffect(() => {
    let filterData: any = [];
    filterData = productsData?.filter((i: any) =>
      i.author.toLowerCase().includes(searchItem)
    );
    setHoldItem(filterData);
  }, [searchItem]);
  return (
    <div>
      <div className="flex justify-between">
        <Button onClick={handleNavigate}>Add Book</Button>
        <div className="w-72">
          <Input
            onChange={(e) => setSearchItem(e.target.value.toLowerCase())}
            // onChange={(e) => setSearch(e.target.value)}
            label="Search with title, author and genre"
            icon={<BsSearch />}
          />
        </div>
        <div className="w-72">
          <Select label="Select Version">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
          </Select>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {holdItem?.map((card: IBook) => (
          <SingleCard card={card} />
        ))}
      </div>
    </div>
  );
}
