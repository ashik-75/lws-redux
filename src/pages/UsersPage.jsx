import { useGetUsersQuery } from "../features/users/usersApi";

const UsersPage = () => {
  const { data, isLoading, isError, isSuccess, error } = useGetUsersQuery();
  return <div>{isSuccess && JSON.stringify(data)}</div>;
};

export default UsersPage;
