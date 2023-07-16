/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */



import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


import { Button, Input } from '@material-tailwind/react';
import { googleLogin, loginUser } from '../../redux/feature/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import toast from 'react-hot-toast';



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

  const { user, isLoading,isError,error } = useAppSelector((state) => state.user);
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
          <Button type='submit'>Login with email</Button>
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
      

    <div style={{display:'flex',justifyContent:'center'}}>
       <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3"
             onClick={handleGoogleLogin}
      >
       <FcGoogle />
        Continue with Google
      </Button>
     </div>
    </div>
  );
}