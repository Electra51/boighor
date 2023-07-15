/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Input,
//   Checkbox,
//   Button,
// } from "@material-tailwind/react";
 
// export default function Login() {
//   return (
//     <Card className="w-96" style={{marginTop:'40px'}}>
//       <CardHeader
//         variant="gradient"
//         color="blue"
//         className="mb-4 grid h-28 place-items-center"
//       >
//         <Typography variant="h3" color="white">
//           Sign In
//         </Typography>
//       </CardHeader>
//       <CardBody className="flex flex-col gap-4">
//         <Input label="Email" size="lg" />
//         <Input label="Password" size="lg" />
//         <div className="-ml-2.5">
//           <Checkbox label="Remember Me" />
//         </div>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button variant="gradient" fullWidth>
//           Sign In
//         </Button>
//         <Typography variant="small" className="mt-6 flex justify-center">
//           Don't have an account?
//           <Typography
//             as="a"
//             href="#signup"
//             variant="small"
//             color="blue"
//             className="ml-1 font-bold"
//           >
//             Sign up
//           </Typography>
//         </Typography>
//       </CardFooter>
//     </Card>
//   );
// }


import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';


import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


import { Button, Input } from '@material-tailwind/react';
import { loginUser } from '../../redux/feature/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';



interface LoginFormInputs {
  email: string;
  password: string;
}

export function LoginForm() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {
    register,
    handleSubmit,
    formState: { errors },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  } = useForm<LoginFormInputs>();

  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.email, isLoading]);

  return (
    <div className=''>
     
      <form onSubmit={handleSubmit(onSubmit)}>
         
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
              autoComplete="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <Button>Login with email</Button>
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
      >
        <p>Google</p>
        <FcGoogle />
      </Button>
    </div>
  );
}