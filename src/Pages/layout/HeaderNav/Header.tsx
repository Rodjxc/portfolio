import LinksNav from "./LinksNav";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
	return (
		<div className="bg-black text-white fixed top-0 w-full z-50 py-4">
			<div className="flex justify-start px-8">
				<Logo />
			</div>
			<LinksNav />
		</div>
	);
};
