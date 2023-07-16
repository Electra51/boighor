/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { IBook } from '../../types/globalTypes';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addToWishList } from '../../redux/feature/wishList/wishlistSlice';
import { usePostWishListMutation } from '../../redux/api/apiSlice';
import {  toast } from 'react-hot-toast';

interface IProps {
  card: IBook;
}

export default function SingleCard({ card }: IProps) {

  // const notify=()=>{
  //   toast.error('Please Login to continue')
  // }
  const dispatch = useAppDispatch();
  
  const [postWishList, ss] = usePostWishListMutation();
  console.log(ss)
const { user } = useAppSelector((state) => state.user);
console.log(user)
  const handleAddBook = (card: IBook) => {
    dispatch(addToWishList(card));
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    postWishList(card);
    toast.success('SuccessFully Added');
    // console.log(book);
  };
  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
     
        <CardHeader floated={false} color="blue-gray">
          <img src={card?.image} alt="ui/ux review check" />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
   
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {card?.title}
          </Typography>
          {/* <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
              <Typography className="font-normal">{card?.publication_date}</Typography>
          </Typography> */}

          <IconButton
            size="sm"
            color="gray"
            variant="text"
            className="rounded-full"
            onClick={() => handleAddBook(card)}
          >
            <HeartIcon className="h-6 w-6" />
          </IconButton>
        </div>
        <div className="mb-3 flex items-center justify-between">
          <Typography color="gray">Author: {card?.author}</Typography>

          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            Genre: {card?.genre}
          </Typography>
        </div>
         <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            Publication Date: {card?.publication_date}
          </Typography>
      </CardBody>
      <CardFooter className="pt-3">
        <a className="inline-block">
          <Link to={`/bookdetail/${card?._id}`}><Button size="sm" variant="text" className="flex items-center gap-2">
           View Details
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button></Link>

          
          
        </a>
      </CardFooter>
    </Card>
  );
}
