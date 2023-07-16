/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { ChangeEvent, FormEvent, useState } from 'react';
import { Avatar, Button, Textarea } from "@material-tailwind/react";
import { FiSend } from 'react-icons/fi';
import { useGetBookDetailQuery, usePostCommentMutation } from '../../redux/api/apiSlice';



interface IProps {
  id: string;
}

export default function BookReview({id}:IProps) {
    
  const [inputValue, setInputValue] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {data}=useGetBookDetailQuery(id)
 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [postComment,{isError,isLoading,isSuccess}]=usePostCommentMutation();
  console.log(isLoading)
  console.log(isError)
  console.log(isSuccess)
 
  const handleSubmit = (event:any) => {
     console.log(inputValue);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    event.preventDefault();
    const options ={
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        id:id,
        data:{comment:inputValue},
        
    };postComment(options)
    
  
    setInputValue('');
  };

  const handleChange = (event: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    setInputValue(event.target.value);
    
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <Textarea
          className="w-full"
          onChange={handleChange}
          value={inputValue}
        />
        <Button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </Button>
      </form>
      <div className="mt-10">
        
        {data?.comments?.map((comment:string, index:number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar src="data:image/jpeg;base64,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" alt="avatar" />
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}