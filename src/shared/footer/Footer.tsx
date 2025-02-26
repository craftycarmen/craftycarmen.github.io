import { FC } from "react";

import { Box, Heading, Flex, Text } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { PageHeader } from "shared/page-header/PageHeader";
import { onMailTo } from "utils/Functions";
import { Socials } from "shared/socials/Socials";

const headerStyles = {
    cursor: "pointer",
    transition: "color 0.2s ease-in-out",
    isTruncated: true,
    fontSize: { base: "2xl", md: "3xl" },
    _hover: { color: "primary.500" },
    _active: { color: "primary.500" },
};

export const Footer: FC = () => {
    return (
        <>
            <PageHeader label="SAY HI" />
            <Flex pb="2" gap="3" overflow="hidden" alignItems="center">
                <Heading {...headerStyles} onClick={onMailTo} fontSize="2xl" color="secondary.400" _hover={{ color: `secondary,400`, textDecoration: `underline` }}>
                    {configs.common.email}
                </Heading>
            </Flex>
            <Text>
                Let's connect!
            </Text>
            <Box pt="16">
                <Socials delay={100} exclude={["mail"]} />
            </Box>
            <Flex
                pt="8"
                pb="2"
                fontSize="sm"
                justifyContent="flex-end"
            // direction={{ base: "column", md: "row" }}
            >
                {/* <Text>This site is hand-crafted, with care by me.</Text> */}
                <Text>&copy;2024–2025 Carmen Shiu</Text>
            </Flex>
        </>
    );
};
