import Projects from "@/components/Projects";

import Description from "@/components/Description";
import MotionDivWrapper from "@/components/MotionDivWrapper";
import { getProjects } from "@/lib/project";

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col gap-10"
    >
      <Description page="Projects" />
      <Projects projects={projects} />
    </MotionDivWrapper>
  );
}
