import { FC } from "react";

import { Box, Button, Container, Flex, HStack, useColorModeValue } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { LogoType } from "shared/navbar/logo-type/LogoType";
import { bgDark, bgLight } from "theme";
import { onResumeOpen } from "utils/Functions";
import { AboutPageId, useScroll, ProjectsPageId } from "utils/useScroll";
import { MenuDrawer } from "./drawer/Drawer";
import { ColorModeButton } from "shared/color-mode-button/ColorModeButton";

export const Navbar: FC = () => {
    const bg = useColorModeValue(bgLight, bgDark);
    const navItemColor = useColorModeValue("secondary.400", "secondary.400");
    const currentPage = useScroll();

    const toSection = (section: string) => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Box bg={bg} position="fixed" top="0" w="100%" left="50%" transform="translate(-50%)" zIndex="10">
            <Container py="4" px="4"
                data-aos="fade-down" data-aos-duration="500" data-aos-delay="100"
            >
                <Flex justifyContent="space-between" alignItems="center">
                    <LogoType

                        text={configs.common.logoType}

                    />
                    <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
                        <HStack spacing="8" mr="6">
                            <Button
                                variant="link"
                                color={navItemColor}
                                textDecoration="underline"
                                textDecorationThickness="2px"
                                textDecorationColor={currentPage === ProjectsPageId ? "secondary.400" : "transparent"}
                                onClick={() => toSection(ProjectsPageId)}
                                data-aos="fade"
                                data-aos-delay="200"
                            >
                                What I've Built
                            </Button>
                            <Button
                                variant="link"
                                color={navItemColor}
                                textDecoration={currentPage === AboutPageId ? "underline" : "none"}
                                textDecorationThickness="2px"
                                textDecorationColor="secondary.400"
                                onClick={() => toSection(AboutPageId)}
                                data-aos="fade"
                                data-aos-delay="300"
                            >
                                The Road So Far
                            </Button>
                            <Button
                                // variant="link" 
                                onClick={onResumeOpen} data-aos="fade" data-aos-delay="400"
                                color="gray.400"
                                backgroundColor="secondary.400"
                                _hover={{ bg: `secondary.400` }}
                            >
                                Resume
                            </Button>
                        </HStack>
                        <ColorModeButton />
                    </Flex>

                    <MenuDrawer
                        currentPage={currentPage}
                        onSectionClick={toSection}
                        display={{ base: "block", md: "none" }}
                    />
                </Flex>
            </Container>
        </Box>
    );
};
