import { axios } from "./axios";
import type { Project, ProjectStatus } from "./projects.types";

const ENDPOINT = "/project";

const statusMapping = {
  info: "stable",
  error: "critical",
  stable: "stable",
  warning: "warning",
  critical: "critical",
  // add more mappings if necessary
};

export async function getProjects() {
  const { data } = await axios.get<Project[]>(ENDPOINT);

  const projects = data.map((project) => ({
    ...project,
    status: (statusMapping[project.status] as ProjectStatus) || project.status,
  }));
  return projects;
}
