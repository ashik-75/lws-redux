import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addAuthor } from "../../features/filter/filterSlice";
import { changePage } from "../../features/pagination/paginationSlice";

export default function VideoGridItem({ video }) {
  const { avatar, title, thumbnail, views, duration, date, link, author } =
    video;

  const dispatch = useDispatch();

  const handleAuthor = () => {
    dispatch(addAuthor(author));
    dispatch(changePage(1));
  };

  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link to={`/video/${video.id}`}>
            <img
              src={thumbnail}
              className="w-full h-auto"
              alt="Some video title"
            />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {duration}
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <span onClick={handleAuthor} className="shrink-0">
            <img
              src={avatar}
              className="rounded-full h-6 w-6"
              alt="Learn with Sumit"
            />
          </span>

          <div clas="flex flex-col">
            <Link to="/">
              <p className="text-slate-900 text-sm font-semibold">{title}</p>
            </Link>
            <p
              className="text-gray-400 text-xs mt-2 hover:text-gray-600"
              onClick={handleAuthor}
            >
              {author}
            </p>
            <p className="text-gray-400 text-xs mt-1">
              {views} views . {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
