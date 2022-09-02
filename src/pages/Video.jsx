import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import Footer from "../components/Footer";
import RelatedVideoList from "../components/list/RelatedVideoList";
import Navbar from "../components/navbar/Navbar";
import { fetchVideo } from "../features/video/videoSlice";

export default function Video() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loading, video, isError, error } = useSelector(
    (state) => state.video
  );

  useEffect(() => {
    dispatch(fetchVideo(id));
  }, [dispatch, id]);
  return (
    <>
      <Navbar />

      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {loading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>{error}</div>
          ) : !video?.id ? (
            <div>Nothing found</div>
          ) : (
            <div class="grid grid-cols-3 gap-2 lg:gap-8">
              <div class="col-span-full w-full space-y-8 lg:col-span-2">
                <VideoPlayer video={video} />

                <VideoDescription video={video} />
              </div>

              <RelatedVideoList video={video} />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
