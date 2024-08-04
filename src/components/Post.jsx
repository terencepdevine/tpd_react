import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Headline from "./Headline";

export default function Post() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState({});
  const { slug } = useParams();

  const fetchPost = async () => {
    // axios
    //   .get(
    //     `http://localhost/terence_devine/wp-json/wp/v2/posts?slug=${slug}&_embed`
    //   )
    //   .then((res) => {
    //     setPost(res.data[0]);
    //   });

    try {
      const res = await axios.get(
        `http://localhost/terence_devine/wp-json/wp/v2/posts?slug=${slug}&_embed`
      );
      setPost(res.data[0]);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  });

  const jsDate = new Date(post.date);
  const formattedDate = jsDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      {loading ? (
        <div className="px-8 lg:px-16">
          <Loading />
        </div>
      ) : (
        <>
          <Headline>
            <Headline.Title>{post.title.rendered}</Headline.Title>
            <Headline.Secondary>
              Posted {formattedDate} by {post._embedded.author[0].name}
            </Headline.Secondary>
          </Headline>
          <div className="px-8 lg:px-16">
            <div className="grid grid-cols-3 gap-16">
              <div className="col-span-3 lg:col-span-2">
                <div
                  className="pb-8 pt-8 lg:pt-16 prose lg:prose-lg xl:prose-xl prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
