import useAuth from "../../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const auth = useAuth();

  return children;
};

export default PublicRoute;
