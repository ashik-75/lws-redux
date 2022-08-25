import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Navbar />

      <Search />

      <section class="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <Hero />

          <PostList />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
