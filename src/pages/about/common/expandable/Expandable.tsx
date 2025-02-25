import { FC, useEffect, useState, useMemo } from "react";

import { Box, Button, AccordionButton, AccordionPanel, Text, Flex, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { SectionTitle } from "pages/about/common/title/Title";

interface Props {
    expanded: number[];
    idx: number;
    onChange: (expanded: any) => void;
    title: string;
    subTitle: string;
    date: string;
    content: string[];
    id: string;
}

export const Expandable: FC<Props> = ({ expanded, id, idx, title, subTitle, date, content, onChange }) => {
    const isExpanded = useMemo(() => expanded.includes(idx), [expanded, idx]);
    const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
    const showSeeMoreBtn = useMemo(
        () => (content.length > 1 && !isExpanded) || (!isExpanded && isOverflowing),
        [isOverflowing, isExpanded, content],
    );
    const dateColor = useColorModeValue("gray", "gray.900");

    useEffect(() => {
        const firstPointId = `first-point-${id}`;
        const element = document.getElementById(firstPointId);

        if (element) {
            if (element.scrollWidth >= element.parentElement?.scrollWidth!) {
                setIsOverflowing(true);
            } else {
                setIsOverflowing(false);
            }
        }
    }, [id]);

    return (
        <>
            <AccordionButton
                as={Box}
                p="0"
                disabled
                onClick={undefined}
                _hover={{ bg: "transparent" }}
                overflow="hidden"
                display="block"
            >
                <SectionTitle title={title} fontWeight="semibold" />
                <Text data-aos="fade" fontWeight="600">{subTitle}</Text>
                <Text color={dateColor} data-aos="fade-up" fontSize="sm">
                    {date}
                </Text>
                <Flex pt="2"
                    justifyContent="flex-end"
                    flexDirection="column"
                    width="full"
                    data-aos="fade">
                    <UnorderedList listStylePosition="outside" pl="1">
                        <Text as="li" id={`first-point-${id}`}>
                            {content[0]}
                        </Text>
                    </UnorderedList>
                    {/* {!isExpanded ? (
                        <Text id={`first-point-${id}`} isTruncated={!expanded.includes(idx)}>
                            {content[0]}
                        </Text>
                    ) : (
                        <UnorderedList listStylePosition="outside" pl="1">
                            <Text as="li" isTruncated={!expanded.includes(idx)}>
                                {content[0]}
                            </Text>
                        </UnorderedList>
                    )} */}
                    {showSeeMoreBtn && (
                        <Button
                            flexShrink={0}
                            id={`see-more-${id}`}
                            size="xs"
                            variant="link"
                            color="secondary.400"
                            opacity="0.8"
                            alignSelf="flex-end"
                            onClick={() => {
                                if (!expanded.includes(idx)) {
                                    onChange([...expanded, idx]);
                                } else {
                                    const newExpanded = expanded.filter((e) => e !== idx);
                                    onChange(newExpanded);
                                }
                            }}
                        >
                            See more
                        </Button>
                    )}
                </Flex>
            </AccordionButton>
            <AccordionPanel p="0" pl="1">
                <UnorderedList listStylePosition="outside">
                    {content.slice(1).map((cont, idx) => (
                        <Text as="li" key={`${title}-cont-${idx}`}>
                            {cont}
                        </Text>
                    ))}
                </UnorderedList>
                {expanded.includes(idx) && (
                    <Flex
                        justifyContent="flex-end"
                        flexDirection="column"
                        width="full"
                    >
                        <Button
                            id={`see-less-${id}`}
                            size="xs"
                            variant="link"
                            color="secondary.400"
                            opacity="0.7"
                            alignSelf="flex-end"
                            onClick={() => {
                                const newExpanded = expanded.filter((e) => e !== idx);
                                onChange(newExpanded);
                            }}
                        >
                            See less
                        </Button>
                    </Flex>
                )}
            </AccordionPanel>
        </>
    );
};
