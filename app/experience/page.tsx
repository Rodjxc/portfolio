import { Education } from "../lib/components/experience/Education";
import { WorkExperience } from "../lib/components/experience/WorkExperience";

export const metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div className="page-container pb-16">
      <WorkExperience />
      <Education />
    </div>
  );
}
