import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

const useAuthCheck = () => {
  const [checking, setChecking] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const localAuthUser = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : null;

    if (localAuthUser) {
      dispatch(
        userLoggedIn({
          refreshToken: localAuthUser?.refreshToken,
          accessToken: localAuthUser?.accessToken,
          email: localAuthUser?.email,
        })
      );
    }

    setChecking(false);
  }, []);
  return checking;
};

export default useAuthCheck;
