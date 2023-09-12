import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    // console.log(bookmark.bookmark);
  const { title } = bookmark;
  
  return (
    <div>
      <h2 className="text-2xl font-semibold p-5 rounded-lg mt-3 bg-green-200">{title}</h2>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
