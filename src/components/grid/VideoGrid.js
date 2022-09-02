import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import VideoGridItem from "./VideoGridItem";

export default function VideGrid() {
  const dispatch = useDispatch();
  const { videos, loading, error, isError } = useSelector(
    (state) => state.videos
  );

  const { author, search, tags } = useSelector((state) => state.filter);
  const { currentPage } = useSelector((state) => state.pagination);

  useEffect(() => {
    dispatch(fetchVideos({ author, tags, search, currentPage }));
  }, [dispatch, author, search, tags, currentPage]);
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {loading ? (
            <div>Loading....</div>
          ) : isError ? (
            <div>{error}</div>
          ) : videos.length === 0 ? (
            <div>Empty videos</div>
          ) : (
            videos.map((video) => (
              <VideoGridItem key={video.id} video={video} />
            ))
          )}

          {/* <div className="col-span-12">some error happened</div> */}
        </div>
      </section>
    </section>
  );
}
