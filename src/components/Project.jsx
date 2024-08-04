import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import Headline from "./Headline";

function Project() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  const fetchProject = async () => {
    try {
      const res = await axios.get(
        `http://localhost/terence_devine/wp-json/wp/v2/projects?slug=${slug}&_embed`
      );
      setProject(res.data[0]);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  });

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Headline>
            <Headline.Title>{project.title.rendered}</Headline.Title>
          </Headline>
        </>
      )}
    </div>
  );
}

export default Project;
