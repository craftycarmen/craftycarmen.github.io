import { FC, useRef } from "react";

import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    IconButton,
    StyleProps,
    Flex,
    VStack,
    useColorModeValue,
} from "@chakra-ui/react";

import { ColorModeButton } from "shared/color-mode-button/ColorModeButton";
import { AboutPageId, ProjectsPageId } from "utils/useScroll";
import { MenuIcon } from "utils/Icons";
import { Socials } from "shared/socials/Socials";
import { onResumeOpen } from "utils/Functions";
import { bgDark, bgLight } from "theme";

interface Props extends StyleProps {
    onSectionClick: (section: string) => void;
    currentPage: string;
}

export const MenuDrawer: FC<Props> = ({ onSectionClick, currentPage, ...props }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<any>(null);
    const drawerBgColor = useColorModeValue(bgLight, bgDark);
    const navItemColor = useColorModeValue(bgDark, bgLight);
    // const menuIconColor = useColorModeValue(primary.400, bgLight);

    return (
        <Box {...props}>
            <Button
                as={IconButton}
                variant="ghost"
                ref={btnRef}
                onClick={onOpen}
                aria-label="open drawer"
                fontSize="lg"
                icon={<MenuIcon />}
                color={navItemColor}
                _hover={{ bg: "transparent" }}
                px="0"
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} autoFocus={false}>
                <DrawerOverlay />
                <DrawerContent bg={drawerBgColor}>
                    <DrawerHeader px="4">
                        <Flex justifyContent="space-between">
                            <ColorModeButton />
                            <DrawerCloseButton position="relative" top="0" right="0" />
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack spacing="6" my="16">
                            <Button
                                variant="link"
                                color={navItemColor}
                                textDecoration="underline"
                                textDecorationThickness="2px"
                                textDecorationColor={currentPage === ProjectsPageId ? "secondary.400" : "transparent"}
                                onClick={() => {
                                    onClose();
                                    setTimeout(() => {
                                        onSectionClick(ProjectsPageId);
                                    }, 250);
                                }}
                                data-aos="fade"
                                data-aos-delay="200"
                                fontWeight="600"
                                fontSize="2xl"
                            >
                                Projects
                            </Button>
                            <Button
                                variant="link"
                                color={navItemColor}
                                textDecoration={currentPage === AboutPageId ? "underline" : "none"}
                                textDecorationThickness="2px"
                                textDecorationColor="secondary.400"
                                onClick={() => {
                                    onClose();
                                    setTimeout(() => {
                                        onSectionClick(AboutPageId);
                                    }, 250);
                                }}
                                data-aos="fade"
                                data-aos-delay="300"
                                fontWeight="600"
                                fontSize="2xl"
                            >
                                Story
                            </Button>
                            <Button
                                color="gray.400"
                                backgroundColor="secondary.400"
                                _hover={{ bg: `secondary.400` }}
                                onClick={onResumeOpen}
                                data-aos="fade"
                                data-aos-delay="400"
                                fontWeight="600"
                                fontSize="2xl"
                            >
                                Resume
                            </Button>
                        </VStack>
                        <Flex justifyContent="center" mt="16">
                            <Socials delay={100} resume={false} />
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};
