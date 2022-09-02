import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import RelatedVideoListItem from "./RelatedVideoListItem";

export default function RelatedVideoList({ video }) {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.relatedVideos);

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags: video.tags, id: video.id }));
  }, [video.tags, dispatch, video.id]);
  return (
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {videos.length > 0 ? (
        videos.map((relatedVideo) => (
          <RelatedVideoListItem relatedVideo={relatedVideo} />
        ))
      ) : (
        <div>Nothing Found</div>
      )}
    </div>
  );
}
