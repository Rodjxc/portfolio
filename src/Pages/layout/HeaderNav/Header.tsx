import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { LinksNav } from "./LinksNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Header: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box className="bg-lightBlack-custom text-white fixed top-0 w-full p-8 h-auto">
			{" "}
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
			<LinksNav isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};
