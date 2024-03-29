import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { LoadingSpinner } from "@features/projects";
import { ErrorMessage } from "@features/projects";

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useGetProjects();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    console.error(error);
    return <ErrorMessage onTryAgain={refetch} />;
  }

  return (
    <>
      <ul className={styles.list}>
        {data?.map((project) => (
          <>
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
