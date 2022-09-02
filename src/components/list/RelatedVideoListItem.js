import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addAuthor } from "../../features/filter/filterSlice";

export default function RelatedVideoListItem({ relatedVideo }) {
  const { duration, title, author, date, id, thumbnail, views } = relatedVideo;
  const dispatch = useDispatch();

  const handleAuthor = () => {
    dispatch(addAuthor());
  };
  return (
    <div class="w-full flex flex-row gap-2 mb-4">
      <div class="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <Link to={`/video/${id}`}>
          <img src={thumbnail} class="object-cover" alt="Some video title" />
        </Link>
        <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
          {duration}
        </p>
      </div>

      <div clas="flex flex-col w-full">
        <Link
          to={`/video/${id}`}
          class="text-slate-900 text-sm font-semibold block"
        >
          {title}
        </Link>

        <span
          onClick={handleAuthor}
          class="text-gray-400 text-xs mt-2 hover:text-gray-600"
          href="#"
        >
          {author}
        </span>
        <p class="text-gray-400 text-xs mt-1">
          {views} views . {date}
        </p>
      </div>
    </div>
  );
}
