import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../features/filter/filterSlice";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

export default function Tags() {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  const handleReset = () => {
    dispatch(resetFilter());
  };
  return (
    <section>
      <div className="flex max-w-7xl mx-auto">
        <div className=" px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          {tags.length > 0 && tags.map((tag) => <Tag key={tag.id} tag={tag} />)}
        </div>
        <div
          onClick={handleReset}
          className="ml-auto mt-2 h-[40px] px-4 py-2 bg-pink-600 text-white font-bold cursor-pointer"
        >
          Reset
        </div>
      </div>
    </section>
  );
}
