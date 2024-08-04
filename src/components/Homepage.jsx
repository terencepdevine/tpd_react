import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

import Button from "./Button";
import Loading from "./Loading";
import PostBlock from "./PostBlock";

function Homepage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        "http://localhost/terence_devine/wp-json/wp/v2/posts?per_page=3"
      );
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="text-center px-8 py-16 lg:pt-24 lg:pb-20 lg:px-16">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl font-light text-gray-400">
          I have nearly two decades of experience as a
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-100 tracking-normal">
            Front-End Web Developer
          </span>
          <br />
          specializing in <strong className="text-gray-100">
            WordPress
          </strong>{" "}
          and <strong className="text-gray-100">React.js</strong>
        </h2>
        <div className="flex justify-center pt-8 gap-4 lg:gap-8">
          <Button to="/work">View Work</Button>
          <Button to="/">
            Resume
            <FolderArrowDownIcon className="w-4 h-4 lg:w-6 lg:h-6 shine" />
          </Button>
        </div>
      </div>
      <div>
        <div className="border-b-[1px] border-gray-600 px-8 lg:px-16 py-8 flex items-center justify-between">
          <h2 className="text-xl lg:text-3xl font-bold">Posts</h2>
          <span>
            <Link to="/blog" className="text-xl lg:text-2xl font-bold">
              View All
            </Link>
          </span>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {posts.map((post, key) => {
              return <PostBlock key={key} post={post} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Homepage;
