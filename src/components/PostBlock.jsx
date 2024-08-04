import { Link } from "react-router-dom";

function PostBlock({ post, key }) {
  const jsDate = new Date(post.date);
  const formattedDate = jsDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      to={`/blog/${post.slug}`}
      key={post.id}
      className={`group px-8 lg:px-16 py-8 border-b-1 border-gray-600 flex flex-col gap-2 hover:bg-gray-800 transition-colors ${
        key % 3 !== 0 && "border-r-[1px]"
      }`}
    >
      <span className="text-gray-400 text-base">Posted {formattedDate}</span>
      <h3
        className="text-gray-300 text-xl lg:text-3xl font-bold transition-colors group-hover:text-gray-50"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      ></h3>
      <div
        className="text-base lg:text-xl text-gray-400"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />
      <span className="text-rose-500 font-bold text-xl lg:text-2xl transition-colors group-hover:underline group-hover:text-rose-400">
        Read Post
      </span>
    </Link>
  );
}

export default PostBlock;
