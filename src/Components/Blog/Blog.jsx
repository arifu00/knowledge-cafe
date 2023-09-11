import { space } from "postcss/lib/list";
import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author_img,
    author_name,
    posted_date,
    reading_time,
    hashtag,
  } = blog;
  return (
    <div>
      <img className="w-full" src={cover} alt={title} />
      <div className="flex justify-between items-center mt-8">
        <div className="flex gap-5">
          <img className="w-14 h-14" src={author_img} alt="" />
          <div>
            <h4 className="text-2xl font-bold">{author_name}</h4>
            <p className="text-base font-semibold text-[#11111199]">
              {posted_date}
            </p>
          </div>
        </div>
        <div>
          <small className="text-xl font-medium text-[#11111199]">
            {reading_time} min read
          </small>
        </div>
      </div>
      <h2 className="text-4xl font-bold mt-8  ">{title}</h2>
      <p className="my-8">
        {
            hashtag.map((hash, idx)=> <span  key={idx}><a href="">#{hash} </a> </span>)
        }
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
