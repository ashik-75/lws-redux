import { useSelector } from "react-redux";

const useAuth = () => {
  const authUser = useSelector((state) => state.auth);

  return authUser?.accessToken && authUser?.email;
};

export default useAuth;
