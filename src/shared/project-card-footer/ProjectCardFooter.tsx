import { FC, useState } from "react";

import { Button, Flex, IconButton, useBreakpointValue, Tooltip, UnorderedList, Text, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel } from "@chakra-ui/react";

import { ArrowRightIcon, GitHubIcon, LinkIcon } from "utils/Icons";
import { open } from "utils/Functions";

interface GitHubButtonProps {
    github?: string;
    display?: any;
}

interface HighlightsProps {
    highlights?: string[];
}

interface LiveDemoProps {
    demo?: string;
    display?: any;
}

interface Props extends GitHubButtonProps, HighlightsProps, LiveDemoProps { }

export const Highlights: FC<HighlightsProps> = ({ highlights }) => {

    return highlights ? (
        <Accordion allowToggle>
            <AccordionItem border="none"
                pb="4"
            >
                {({ isExpanded }) => (
                    <>
                        <AccordionButton
                            as={Button}
                            variant="link"
                            color="secondary.400"
                            _hover={{ bg: "transparent" }}
                            overflow="hidden"
                            p="0"
                            justifyContent="flex-start"
                            width="fit-content"
                        >
                            {isExpanded ? "Hide Highlights" : "See Highlights"}
                        </AccordionButton>

                        <AccordionPanel>
                            <UnorderedList listStylePosition="outside" pl="1">
                                {highlights.map((highlight, idx) => (
                                    <Text as="li" key={idx}>{highlight}</Text>
                                ))}
                            </UnorderedList>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </Accordion>
    ) : null;
};

export const GitHubButton: FC<GitHubButtonProps> = ({ github, display }) => {
    const as = useBreakpointValue({ base: IconButton, lg: Button });

    return github ? (
        <Tooltip
            key="GitHub"
            label="View Code"
            textTransform="capitalize"
            bg="highlight.200"
            color="primary.400"
        >
            <Button
                data-aos="fade"
                data-aos-delay="400"
                as={as}
                variant="secondary"
                py="5"
                display={display}
                leftIcon={<GitHubIcon />}
                icon={<GitHubIcon />}
                onClick={() => open(github)}
                bg="secondary.300"
                color="gray.200"
                _hover={{ bg: `secondary.300` }}
                border="2px solid highlight.300"
                boxShadow="2px 2px 0px rgba(251, 170, 41, 1)"
            >
                GitHub
            </Button>
        </Tooltip>
    ) : null;
};

export const LiveDemo: FC<LiveDemoProps> = ({ demo, display }) => {
    const as = useBreakpointValue({ base: IconButton, lg: Button });

    return demo ? (
        <Tooltip
            key="Live"
            label="View Live Site"
            textTransform="capitalize"
            bg="highlight.200"
            color="primary.400"
        >
            <Button
                data-aos="fade"
                data-aos-delay="200"
                as={as}
                display={display}
                leftIcon={<LinkIcon fontSize="14pt" />}
                icon={<LinkIcon fontSize="14pt" />}
                onClick={() => open(demo)}
                bg="secondary.300"
                color="gray.200"
                _hover={{ bg: `secondary.300` }}
                border="2px solid highlight.300"
                boxShadow="2px 2px 0px rgba(251, 170, 41, 1)"
            >
                Live
            </Button>
        </Tooltip>
    ) : null;
};

export const ProjectCardFooter: FC<Props> = ({ highlights, github, demo }) => {
    return (
        <Flex justifyContent={highlights ? "space-between" : "flex-end"} alignItems="center" pt="8">
            <Highlights highlights={highlights} />
            <Flex gap="4" justifyContent="space-between" alignItems="center" display={demo || github ? "flex" : "none"}>
                <LiveDemo demo={demo} />
                <GitHubButton github={github} />
            </Flex >
        </Flex >
    );
};
