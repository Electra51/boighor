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
import { IBook } from "../../types/globalTypes";


 interface IProps {
  card: IBook;
}

export default function SingleCard({card}: IProps) {

  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={card.image}
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          <HeartIcon className="h-6 w-6" />
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {card?.title}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
              <Typography className="font-normal">{card?.publication_date}</Typography>
          </Typography>
        
        </div>
         <div className="mb-3 flex items-center justify-between">
          <Typography color="gray">
          Author: {card?.author}
        </Typography>
      
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
           
           Genre: {card.genre}
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
    </Card>
  );
}