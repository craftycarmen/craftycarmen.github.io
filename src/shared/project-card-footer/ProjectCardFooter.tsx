import { FC } from "react";

import { Button, Flex, IconButton, useBreakpointValue, Tooltip } from "@chakra-ui/react";

import { ArrowRightIcon, GitHubIcon, LinkIcon } from "utils/Icons";
import { open } from "utils/Functions";

interface GitHubButtonProps {
    github?: string;
    display?: any;
}

interface ReadMoreProps {
    readMore?: string;
}

interface LiveDemoProps {
    demo?: string;
    display?: any;
}

interface Props extends GitHubButtonProps, ReadMoreProps, LiveDemoProps { }

export const ReadMore: FC<ReadMoreProps> = ({ readMore }) => {
    return readMore ? (
        <Button
            data-aos="fade"
            data-aos-offset="200"
            variant="link"
            colorScheme="black"
            rightIcon={<ArrowRightIcon fontSize="16pt" />}
            onClick={() => open(readMore)}
        >
            Read More
        </Button>
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

export const ProjectCardFooter: FC<Props> = ({ readMore, github, demo }) => {
    return (
        <Flex justifyContent={readMore ? "space-between" : "flex-end"} alignItems="center" pt="8">
            <ReadMore readMore={readMore} />
            <Flex gap="4" justifyContent="space-between" alignItems="center" display={demo || github ? "flex" : "none"}>
                <LiveDemo demo={demo} />
                <GitHubButton github={github} />
            </Flex>
        </Flex>
    );
};
