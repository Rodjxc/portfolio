import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { LinksNav } from "./LinksNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Header: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box className="bg-black text-white fixed top-0 w-full z-50 p-8">
			<Flex justify="space-between" align="center">
				<Logo />
				<IconButton
					display={{ base: "block", md: "none" }}
					onClick={isOpen ? onClose : onOpen}
					icon={
						<FontAwesomeIcon
							icon={isOpen ? faTimes : faBars}
							className="text-white"
						/>
					}
					variant="outline"
					aria-label="Toggle Navigation"
				/>
			</Flex>
			<LinksNav isOpen={isOpen} />
		</Box>
	);
};
