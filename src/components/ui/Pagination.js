import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  fetchPagination,
} from "../../features/pagination/paginationSlice";

export default function Pagination() {
  const dispatch = useDispatch();
  const { loading, isErrror, totalPage, currentPage, error } = useSelector(
    (state) => state.pagination
  );

  const { author, search, tags } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchPagination({ author, search, tags, currentPage }));
  }, [dispatch, author, search, tags, currentPage]);

  const handlePagination = (page) => {
    dispatch(changePage(page));
  };

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {loading ? (
          <div>Loading...</div>
        ) : isErrror ? (
          <div>{error}</div>
        ) : (
          [...Array(Math.ceil(totalPage / 4)).keys()].map((page) => (
            <div
              onClick={() => handlePagination(page + 1)}
              className={
                page + 1 === currentPage
                  ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
                  : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
              }
            >
              {page + 1}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
