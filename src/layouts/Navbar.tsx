import React from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import navLogo from '../assets/images/navlogo.png.png';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { setUser } from '../redux/feature/user/userSlice';
export default function Example() {
  const { user } = useAppSelector((state) => state.user);
  const [openNav, setOpenNav] = React.useState(false);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    console.log('logout');
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };
  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/allbook">
          <p className="flex items-center">All Books</p>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/wishlist">
          <p className="flex items-center">Wishlist</p>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/addnewbook">
          <p className="flex items-center">Add New Book</p>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        {/* <Link  to='/editbook'>
        <p className="flex items-center">
        Edit Book
        </p></Link> */}
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 left-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-600">
          <img alt="nature" className="h-[3.6rem] " src={navLogo} />
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {!user?.email && (
              <>
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <Link to="/signup">
                    <span>Sign up</span>
                  </Link>
                </Button>
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <Link to="/login">
                    {' '}
                    <span>Sign in</span>
                  </Link>
                </Button>
              </>
            )}
            {user?.email && (
              <Button
                onClick={handleLogOut}
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <Link to="/login">
                  {' '}
                  <span>LogOut</span>
                </Link>
              </Button>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Sign up</span>
          </Button>
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Sign in</span>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
}
