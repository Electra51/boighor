import { onAuthStateChanged } from "firebase/auth";
import MainLayout from "./layouts/MainLayout"
import { useAppDispatch } from "./redux/hook";
import { setLoading, setUser } from "./redux/feature/user/userSlice";
import { auth } from "./lib/firebase";
import { useEffect } from "react";

function App() {
   const dispatch = useAppDispatch();

 // eslint-disable-next-line @typescript-eslint/no-unsafe-call
 useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <div className="max-w-6xl mx-auto">
      <MainLayout/>
    </div>
  )
}

export default App
