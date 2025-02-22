import { FC, useState, useEffect } from "react";

import { Box, Flex, Heading, Text, Image, Button, IconButton } from "@chakra-ui/react";

import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";
import { Blog } from "pages/about/blog/Blog";
import { Education } from "pages/about/education/Education";
import { Experience } from "pages/about/experience/Experience";
import { Skills } from "pages/about/skills/Skills";
import { VolumeIcon } from "utils/Icons";
import { marked } from "marked";

export const About: FC = () => {
    const content = useContent(MarkdownFile.About);
    const [parsedContent, setParsedContent] = useState<string>("");

    // Use useEffect to parse the markdown once content is available
    useEffect(() => {
        const parseContent = async () => {
            if (content.about) {
                const parsed = await marked(content.about); // Ensure parsing is awaited
                setParsedContent(parsed);
            }
        };

        parseContent(); // Call the async function to parse content
    }, [content.about]);

    // const onPlay = () => {
    //     const audio = new Audio(configs.common.audioFile);
    //     audio.play();
    // };

    return (
        <Box>
            <Flex pt="8" gap={{ base: 6, md: 6, lg: 12 }} direction={{ base: "column", md: "row" }}>
                {/* <Box flex="0.35" data-aos="fade-up">
                    <picture>
                        <source type="image/webp" srcSet={configs.common.mainPicture}></source>
                        <source type="image/jpeg" srcSet={configs.common.mainPictureJPG}></source>
                        <Image borderRadius="xl" src={configs.common.mainPicture} w="100%" alt="profile image" />
                    </picture>
                </Box> */}
                <Box flex="1">
                    <Heading data-aos="fade-down" color="accent.300">{configs.common.name}</Heading>
                    {/* <Flex alignItems="center">
                        <Text fontWeight="bold" opacity="0.5" data-aos="fade" data-aos-delay="200">
                            {configs.common.pronunciation}
                        </Text>

                        <Button
                            size="xs"
                            aria-label="pronunciation button"
                            as={IconButton}
                            variant="icon"
                            fontSize="md"
                            icon={<VolumeIcon />}
                            onClick={onPlay}
                            data-aos="fade"
                            data-aos-delay="400"
                        />
                    </Flex> */}
                    <Box pt="4" data-aos="fade-up" data-aos-delay="400">
                        {/* <Content fontSize="lg">{content.about}</Content> */}
                        {parsedContent && (
                            <Text fontSize="lg">
                                <Box
                                    id="about-content"
                                    as="div"
                                    dangerouslySetInnerHTML={{ __html: parsedContent }}
                                />
                            </Text>
                        )}
                        <style>
                            {`
                                    #about-content p {
                                        margin-bottom: 1.5rem;
                                    }

                                    #about-content strong {
                                        font-weight: bold;
                                        background-color: #d5dcf9;
                                        color: #293132;
                                    }
                                `}
                        </style>
                    </Box>
                </Box>
            </Flex>
            {/* <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 16 }}
                mt="16"
                justifyContent="space-between"
            >
                <Box flex="0.6" overflow="hidden">
                    <Experience />
                </Box>
                <Box flex="0.6" flexShrink="0" overflow="hidden">
                    <Education />
                </Box>
            </Flex> */}
            <Box pt="16">
                <Experience />
            </Box>
            <Box pt="16">
                <Education />
            </Box>
            <Box pt="16">
                <Skills />
            </Box>
        </Box>
    );
};
