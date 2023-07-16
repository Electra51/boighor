/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useForm, useWatch } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';


import { Button, Input } from '@material-tailwind/react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { createUser, googleLogin } from '../../redux/feature/user/userSlice';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRegisterMutation } from '../../redux/api/apiSlice';
import { useNavigate } from 'react-router-dom';



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
   console.log(ss)
const [disabled,setDisabled]=useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const dispatch = useAppDispatch();
 const navigate = useNavigate();
  const onSubmit = (data: SignupFormInputs) => {
    console.log(data);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    postUser({...data})
    
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(createUser({ email: data.email, password: data.password }));
  
  };
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({control, name: "confirmPassword" });
  
  const handleSign =()=>{
navigate('/');
  }
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
    
      <form  onSubmit={handleSubmit(onSubmit)}>
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
          <Button type='submit' disabled={disabled} onClick={handleSign}>Create Account</Button>
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
        type='submit'
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