/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  HeartIcon,
} from "@heroicons/react/24/solid";
 import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "../redux/hook";
import { IBook } from "../types/globalTypes";



// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty-pattern
export default function Wishlist({}) {

const {wish}=useAppSelector((state)=>state.wishlist)
console.log('wish',wish)

  return (
     <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
  
     {
      wish?.map((value:IBook)=>
         <Card className="w-full max-w-[26rem] shadow-lg" key={value?._id}>
      
      <CardHeader floated={false} color="blue-gray">
        <img
          src={value?.image}
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          
          <Typography variant="h5" color="blue-gray" className="font-medium">
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
          <Typography color="gray">
          Author: {value?.author}
        </Typography>
      
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
           
           Genre:  {value?.genre}
          </Typography>
        
        </div>
       
      </CardBody>
      <CardFooter className="pt-3">
       
    <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More 
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>)
     }
      </div>
  )
}

