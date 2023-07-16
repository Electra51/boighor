/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
import { HeartIcon, TrashIcon } from '@heroicons/react/24/solid';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { IBook } from '../types/globalTypes';
import { Fragment, useState } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { removeFromWishList } from '../redux/feature/wishList/wishlistSlice';
import { useGetWishlistQuery } from '../redux/api/apiSlice';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty-pattern
export default function Wishlist({}) {
  const { data, isLoading, error } = useGetWishlistQuery(undefined);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log(data?.data);
  console.log(isLoading);
  console.log(error);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const productsData = data?.data;
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const { wish } = useAppSelector((state) => state.wishlist);
  console.log('wish', wish);

  const handleRemoveBook = (value: IBook) => {
    dispatch(removeFromWishList(value));
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {wish?.map((value: IBook) => (
        <Card className="w-full max-w-[26rem] shadow-lg" key={value?._id}>
          <CardHeader floated={false} color="blue-gray">
            <img src={value?.image} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>

          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                {value?.title}
              </Typography>
              {/* <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
              <Typography className="font-normal">{card?.publication_date}</Typography>
          </Typography> */}

              <IconButton
                size="sm"
                color="red"
                variant="text"
                className="rounded-full"
              >
                <HeartIcon className="h-6 w-6" />
              </IconButton>
            </div>
            <div className="mb-3 flex items-center justify-between">
              <Fragment>
                <IconButton
                  onClick={handleOpen}
                  variant="text"
                  size="sm"
                  color="gray"
                  className="rounded-full"
                >
                  <TrashIcon className="h-6 w-6" />
                </IconButton>
                <Dialog open={open} handler={handleOpen}>
                  <DialogHeader>Title:{value?.title}</DialogHeader>
                  <DialogBody divider>
                    Are you sure remove it from wishList?
                  </DialogBody>
                  <DialogFooter>
                    <Button
                      variant="text"
                      color="red"
                      onClick={handleOpen}
                      className="mr-1"
                    >
                      <span>Cancel</span>
                    </Button>

                    <Button
                      variant="gradient"
                      color="green"
                      onClick={() => handleRemoveBook(value)}
                    >
                      <span>Confirm</span>
                    </Button>
                  </DialogFooter>
                </Dialog>
              </Fragment>
              <Typography color="gray">Author: {value?.author}</Typography>

              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                Genre: {value?.genre}
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-3">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
              >
                Learn More
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </Button>
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
