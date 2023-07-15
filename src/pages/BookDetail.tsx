/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography
} from "@material-tailwind/react";
import { useGetBookDetailQuery } from "../redux/api/apiSlice";
import { useParams } from "react-router-dom";
import {
  
  HeartIcon,
  
} from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import {
  
  IconButton,
} from "@material-tailwind/react";

import BookReview from "../components/ui/BookReview";
import { Fragment, useState } from "react";
export default function BookDetail() {
  const {id}=useParams();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
  const {data, isLoading,error}= useGetBookDetailQuery(id);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log('kk',data)

  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);

  return (
  
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
  
  <div >
    <img 
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
        </Typography>
         <Typography color="gray" className="font-normal mb-8">
         Genre: {data?.genre}
        </Typography>
         <IconButton
          size="sm"
          color="gray"
          variant="text"
          className="rounded-full"
        >
          <HeartIcon className="h-6 w-6" />
        </IconButton>

        <Button className="mr-3"
        >Edit</Button>
          <Fragment>
      <Button
          onClick={(handleOpen)}
         
        
        
          
        >Delete
        </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Title:
          {data?.title}
          </DialogHeader>
        <DialogBody divider>
          Are you sure delete  {data?.title} ? Please Confirm it.
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
          
          <Button variant="gradient" color="green"   
          // onClick={()=>handleRemoveBook(value)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
        </div>
        <BookReview  id={id!}/>
</div>
     
    
  )
}
