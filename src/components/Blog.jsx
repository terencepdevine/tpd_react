import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import PostBlock from "./PostBlock";
import Headline from "./Headline";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        "http://localhost/terence_devine/wp-json/wp/v2/posts"
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
    <div>
      <Headline>
        <Headline.Title>My Blog</Headline.Title>
      </Headline>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {posts.map((post, key) => (
                <PostBlock key={key} post={post} />
              ))}
            </div>
          ) : (
            <h1>No Posts</h1>
          )}
        </div>
      )}
    </div>
  );
}
