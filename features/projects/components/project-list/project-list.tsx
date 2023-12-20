import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { LoadingSpinner } from "@features/projects";
import { ErrorMessage } from "@features/projects";
import { Select } from "@features/ui";
import { useState } from "react";

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useGetProjects();

  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: "pheonix_baker", label: "Pheonix Baker" },
    { value: "olivia_rhye", label: "Olivia Rhye" },
    { value: "lana_steiner", label: "Lana Steiner" },
    { value: "demi_wilkonson", label: "Demi Wilkonson" },
    { value: "candice_wu", label: "Candice Wu" },
    { value: "natali_craig", label: "Natali Craig" },
    { value: "drew_cano", label: "Drew Cano" },
  ];

  function handleSelectChange(value: string) {
    setSelectedOption(value);
    //TODO
  }

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
      <Select
        options={options}
        onChange={handleSelectChange}
        icon="/icons/users.svg"
        label="This is a label"
        hint="This is a hint"
      />
      <p>Selected Value is {selectedOption}</p>
    </>
  );
}
