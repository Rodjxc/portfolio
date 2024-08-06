import { Heading, Link, Text } from "@chakra-ui/react";
import {
	faGithub,
	faInstagram,
	faLinkedinIn,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutMe = () => {
	return (
		<div className="bg-lightBlack-custom p-28 my-4">
			<Heading
				className="text-pink-custom"
				fontWeight="400"
				fontSize="60px"
				textTransform="uppercase"
				mb="20"
				textAlign="center"
			>
				About Me
			</Heading>
			<Text className="text-white">
				Since I was 5 I've been surrounded by computers and videogames, which
				probably laid the foundations of an interest for technology. This
				interest took me to a pivotal decision shifting from a 10+ years working
				in the craft beer industry and being a beer sommelier, to changing my
				career to become a developer.
			</Text>
			<br />
			<Text className="text-white">
				I believe that my brain naturally works exactly the way a developer
				thinks, with the logic side of programming and believing that there's
				always more than one solution to a problem. Before I used my creativity
				to make original and tasty beers and now I use it to create web
				applications. I really enjoy minimalist designs inspired by the likes of
				Next JS and Vercel. When I see a project built with frameworks I'm not
				familiar with, I instantly get an “I want to learn this” feeling
			</Text>
			<br />
			<Text className="text-white">
				When I'm not at the computer I'm usually in the gym practicing Brazilian
				Jiu Jitsu, travelling or spending time with my wife and dog
			</Text>{" "}
			<br />
			<Text className="text-white">
				Oh, and I also have a YouTube channel where I make guides for
				videogames!
			</Text>
			<div className="mt-20">
				<Link
					href="https://github.com/Rodjxc"
					target="_blank"
					className="text-lg mx-3 pb-2 text-white  hover:text-pink-custom hover:border-pink-custom"
				>
					<FontAwesomeIcon icon={faGithub} className="size-6 text-white" />
				</Link>
				<Link
					href="https://www.linkedin.com/in/rod-jimeno/"
					target="_blank"
					className="text-lg mx-3 pb-2 text-white  hover:text-pink-custom hover:border-pink-custom"
				>
					<FontAwesomeIcon icon={faLinkedinIn} className="size-6 text-white" />
				</Link>
				<Link
					href="https://www.instagram.com/sendaplays/"
					target="_blank"
					className="text-lg mx-3 pb-2 text-white  hover:text-pink-custom hover:border-pink-custom"
				>
					<FontAwesomeIcon icon={faInstagram} className="size-6 text-white" />
				</Link>
				<Link
					href="https://www.youtube.com/@SendaPlays"
					target="_blank"
					className="text-lg mx-3 pb-2 text-white  hover:text-pink-custom hover:border-pink-custom"
				>
					<FontAwesomeIcon icon={faYoutube} className="size-6 text-white" />
				</Link>
			</div>
		</div>
	);
};
