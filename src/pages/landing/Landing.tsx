import { FC, useEffect, useState } from "react";

import { Center, Container, Heading, Image, HStack, Stack, Flex, Box, IconButton, Button, Text } from "@chakra-ui/react";

import { Content, configs, useContent, MarkdownFile } from "shared/content/Content";
import { Socials } from "shared/socials/Socials";
import { ProjectsPageId } from "utils/useScroll";
import { ChevronDownIcon } from "utils/Icons";
import { marked } from "marked";

export const Landing: FC = () => {
    const content = useContent(MarkdownFile.Landing);
    const [parsedContent, setParsedContent] = useState<string>("");

    // Use useEffect to parse the markdown once content is available
    useEffect(() => {
        const parseContent = async () => {
            if (content.landing) {
                const parsed = await marked(content.landing); // Ensure parsing is awaited
                setParsedContent(parsed);
            }
        };

        parseContent(); // Call the async function to parse content
    }, [content.landing]);

    const scrollIntoView = () => {
        const featuredHeader = document.getElementById(ProjectsPageId);

        if (featuredHeader) {
            featuredHeader.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box id="page-landing">
            <Center pb={{ base: 16, md: 32 }}>
                <HStack justifyContent="flex-end" alignItems="flex-start" spacing={{ base: 8, md: 16 }}>
                    <Stack flex="1">
                        <Stack spacing="8">
                            <Heading
                                fontSize={{ base: "5xl", md: "7xl" }}
                                lineHeight="1"
                                color="accent.300"
                                data-aos="fade-down"
                                data-aos-delay="400"
                            >
                                {configs.landing.headline}
                                <br />
                                {configs.landing.subheadline}
                            </Heading>
                            {parsedContent && (
                                <Text fontSize="lg">
                                    <Box
                                        as="div"
                                        dangerouslySetInnerHTML={{ __html: parsedContent }}
                                    />
                                </Text>
                            )}
                            <style>
                                {`
                                    #page-landing p {
                                        margin-bottom: 1.5rem;
                                    }

                                    #page-landing strong {
                                        font-weight: bold;
                                        background-color: #d5dcf9;
                                        color: #293132;
                                    }
                                `}
                            </style>
                        </Stack>
                        <Socials delay={1000} />
                    </Stack>
                    <Container
                        // flex="0.4"
                        // display={{ base: "none", lg: "block" }}
                        maxWidth={{ base: "40%", md: "30%" }}
                        display="inline-block"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <Box position="relative" display="inline-block">
                            <Box
                                position="absolute"
                                top="5px"
                                left="5px"
                                width="100%"
                                height="100%"
                                border="2px solid #ff686b"
                                borderRadius="6px"
                                boxSizing="border-box"
                                zIndex={1}
                            />
                            <picture>
                                <source type="image/webp" src={configs.landing.picture}></source>
                                <source type="image/jpeg" src={configs.landing.jpg}></source>
                                <Image
                                    borderRadius="md"
                                    src={configs.landing.jpg}
                                    alt={`Carmen Shiu`}
                                    boxShadow="9px 9px 0px rgba(213, 220, 249, 1)"
                                />
                            </picture>
                        </Box>
                    </Container>
                </HStack>
            </Center>
            <Flex justifyContent="center" data-aos="fade" data-aos-delay="1400">
                <Button
                    as={IconButton}
                    fontSize="3xl"
                    variant="icon"
                    aria-label="down arrow button"
                    icon={<ChevronDownIcon />}
                    color="yellow.300"
                    onClick={scrollIntoView}
                >
                </Button>
            </Flex>
        </Box>
    );
};
