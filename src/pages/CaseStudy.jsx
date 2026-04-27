import { useParams } from "react-router-dom";

function CaseStudy({ projects }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id)); // Convert id to number

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>  {/* Changed from title to name */}
      <p>{project.description}</p>
      <p>Year: {project.year}</p>
      <p>Category: {project.category}</p>
      <p>Stack: {project.stack?.join(", ")}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Live Site
        </a>
      )}
    </div>
  );
}

export default CaseStudy;