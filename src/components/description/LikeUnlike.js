import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { updateReaction } from "../../features/video/videoSlice";

export default function LikeUnlike({ video }) {
  const dispatch = useDispatch();

  const handleLikeReaction = () => {
    dispatch(
      updateReaction({
        id: video.id,
        info: {
          likes: video.likes + 1,
        },
      })
    );
  };

  const handleUnLikeReaction = () => {
    dispatch(
      updateReaction({
        id: video.id,
        info: {
          unlikes: video.unlikes + 1,
        },
      })
    );
  };
  return (
    <div class="flex gap-10 w-48">
      <div class="flex gap-1">
        <div class="shrink-0">
          <img class="w-5 block" src={likeImage} alt="Like" />
        </div>
        <div
          onClick={handleLikeReaction}
          class="text-sm leading-[1.7142857] text-slate-600 cursor-pointer"
        >
          {video.likes}
        </div>
      </div>
      <div class="flex gap-1">
        <div class="shrink-0">
          <img class="w-5 block" src={unlikeImage} alt="Unlike" />
        </div>
        <div
          onClick={handleUnLikeReaction}
          class="text-sm leading-[1.7142857] text-slate-600 cursor-pointer"
        >
          {video.unlikes}
        </div>
      </div>
    </div>
  );
}
