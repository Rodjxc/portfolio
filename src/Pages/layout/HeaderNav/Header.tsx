import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { LinksNav } from "./LinksNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Header: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box className="bg-lightBlack-custom text-white fixed w-full p-8 z-50">
			<Flex justify="space-between" alignItems="center">
				<Flex justify="flex-start">
					<Logo />
				</Flex>
				<Flex justify="flex-end">
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
					<LinksNav isOpen={isOpen} onClose={onClose} />
				</Flex>
			</Flex>
		</Box>
	);
};
