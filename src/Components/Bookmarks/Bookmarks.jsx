import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 mt-5 bg-slate-200 p-4">
      <h2 className="text-2xl font-bold text-center">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {
      bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))
      }
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};
export default Bookmarks;
