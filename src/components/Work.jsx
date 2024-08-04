import { Link } from "react-router-dom";
import Headline from "./Headline";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Work() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        `http://localhost/terence_devine/wp-json/wp/v2/projects?_embed`
      );
      setProjects(res.data);
    } catch (error) {
      console.error("Error fetching  projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  });

  return (
    <div>
      <Headline>
        <Headline.Title>My Work</Headline.Title>
      </Headline>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3">
          {projects.map((project, key) => (
            <Link
              to={`/work/${project.slug}`}
              key={key}
              className="border-r-1 border-b-1 border-gray-600 flex flex-col gap-2 hover:bg-gray-800 transition-colors group"
            >
              {project.featured_image_url && (
                <div className="m-3 mb-0 bg-gray-900  border-1 border-gray-600 rounded-lg overflow-hidden ">
                  <img
                    src={project.featured_image_url}
                    alt=""
                    className="w-full block h-auto group-hover:opacity-20 transition-all"
                  />
                </div>
              )}
              <div className="px-16 py-8 flex flex-col gap-2">
                <h3
                  className="text-3xl group-hover:text-gray-50"
                  dangerouslySetInnerHTML={{ __html: project.title.rendered }}
                ></h3>
                <h4 className="font-normal text-gray-400">
                  {project.project_type.map((type, key) => (
                    <span key={key}>{type.name}</span>
                  ))}
                </h4>
                <p
                  className="text-xl"
                  dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}
                ></p>
                <span className="text-rose-500 font-bold text-2xl transition-colors group-hover:text-rose-400 group-hover:underline">
                  View Project
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
