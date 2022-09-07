import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import EditPage from "./pages/EditVideo";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
        <Route path="/video/:videoId/edit" element={<EditPage />} />
      </Routes>
    </>
  );
};

export default App;
