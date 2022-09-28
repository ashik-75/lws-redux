import { Spinner } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/Guard/PrivateRoute";
import PublicRoute from "./components/Guard/PublicRoute";
import Navbar from "./components/Navbar";
import Answer from "./components/Section/Answer";
import useAuthCheck from "./hooks/useAuthCheck";
import ChatPage from "./pages/ChatPage";
import ConversationsPage from "./pages/ConversationsPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import UsersPage from "./pages/UsersPage";

const App = () => {
  const authChecking = useAuthCheck();
  return authChecking ? (
    <Spinner />
  ) : (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/answer/:questionId" element={<Answer />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/chat-page"
          element={
            <PrivateRoute>
              <ChatPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/conv"
          element={
            <PrivateRoute>
              <ConversationsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
