import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import Topbar from "./components/Topbar";

const App = () => {
  return (
    <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar />

      <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Topbar />
        <hr class="mt-4" />

        <TodoList />

        <hr class="mt-4" />

        <Footer />
      </div>
    </div>
  );
};

export default App;
