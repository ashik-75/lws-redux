import { useDispatch, useSelector } from "react-redux";
import { addTag, removeTag } from "../../features/filter/filterSlice";

export default function Tag({ tag }) {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.filter);

  const index = tags.indexOf(tag.title);

  const handleTags = (info) => {
    if (index === -1) {
      dispatch(addTag(info));
    } else {
      dispatch(removeTag(info));
    }
  };

  const markup =
    index === -1
      ? "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
      : "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer";
  return (
    <div onClick={() => handleTags(tag?.title)} className={markup}>
      {tag.title}
    </div>
  );
}
