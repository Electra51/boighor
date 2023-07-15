/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import {
//   Card,
//   Input,
//   Checkbox,
//   Button,
//   Typography,
//   CardHeader,
// } from "@material-tailwind/react";
 
// export default function Register() {
//   return (
//     <Card color="transparent" shadow={false} className="w-96">
//       <CardHeader
//         variant="gradient"
//         color="blue"
//         className="mb-4 grid h-28 place-items-center mt-5"
//       >
//        <Typography variant="h4" color="blue-gray">
//         Sign Up
//       </Typography>
//       <Typography color="gray" className="mt-1 font-normal">
//         Enter your details to register.
//       </Typography>
//       </CardHeader>
      
//       <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
//         <div className="mb-4 flex flex-col gap-6">
//           <Input size="lg" label="Name" />
//           <Input size="lg" label="Email" />
//           <Input type="password" size="lg" label="Password" />
//         </div>
//         <Checkbox
//           label={
//             (
//               <Typography
//                 variant="small"
//                 color="gray"
//                 className="flex items-center font-normal"
//               >
//                 I agree the
//                 <a
//                   href="#"
//                   className="font-medium transition-colors hover:text-blue-500"
//                 >
//                   &nbsp;Terms and Conditions
//                 </a>
//               </Typography>
//             )
//           }
//           containerProps={{ className: "-ml-2.5" }}
//         />
//         <Button className="mt-6" fullWidth>
//           Register
//         </Button>
//         <Typography color="gray" className="mt-4 text-center font-normal">
//           Already have an account?{" "}
//           <a
//             href="#"
//             className="font-medium text-blue-500 transition-colors hover:text-blue-700"
//           >
//             Sign In
//           </a>
//         </Typography>
//       </form>
//     </Card>
//   );
// }





import { useForm, useWatch } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';


import { Button, Input } from '@material-tailwind/react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { createUser, googleLogin } from '../../redux/feature/user/userSlice';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRegisterMutation } from '../../redux/api/apiSlice';



interface SignupFormInputs {
  email: string;
  password: string;
  confirmPassword:string;
}

export function RegisterForm() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {
    register,
    handleSubmit, control,
    formState: { errors },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  } = useForm<SignupFormInputs>();
  const { isError,error } = useAppSelector((state) => state.user);

   const [postUser,ss] = useRegisterMutation();
const [disabled,setDisabled]=useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const dispatch = useAppDispatch();

  const onSubmit = (data: SignupFormInputs) => {
    console.log(data);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    postUser({...data})
    
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(createUser({ email: data.email, password: data.password }));
  };
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({control, name: "confirmPassword" });
  
  useEffect(()=>{
    if(password !== undefined && password !== "" && confirmPassword !== undefined && confirmPassword !== "" && password ===confirmPassword
      ){
        setDisabled(false);
      }else{
        setDisabled(true)
      }
  }, [password, confirmPassword]);

     useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError,error]);

   const handleGoogleLogin=()=>{
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(googleLogin())
  }
  return (
    <div className=''>
    
      <form   onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <Input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <Input
              id="confirm-password"
              placeholder="confirm password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('confirmPassword', { required: 'confirmPassword is required' })}
            />
          </div>
          <Button type='submit' disabled={disabled}>Create Account</Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        
        type="button"
        className="flex items-center justify-between"
        onClick={handleGoogleLogin}
      >
        <p>SignUp With Google</p>
        <FcGoogle />
      </Button>
    </div>
  );
}