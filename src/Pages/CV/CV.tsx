import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";
import { WorkingTools } from "./WorkingTools";
import { Languages } from "./Languages";

export const CV = () => {
	return (
		<div className="bg-lightBlack-custom text-white p-[8%] min-h-[500px]">
			<div className="flex flex-col gap-5 mt-4">
				<WorkExperience />
				<Education />
				<WorkingTools />
				<Languages />
			</div>
		</div>
	);
};
