import { FC } from "react";

import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { Tags } from "shared/tags/Tags";
import { ProjectCardFooter } from "shared/project-card-footer/ProjectCardFooter";

export enum ImagePosition {
    Right,
    Left,
}
interface Props {
    id: string;
    title: string;
    year: string;
    team: string;
    demo?: string;
    github?: string;
    tags: string[];
    description: string;
    highlights?: string[];
    image: string;
    imagePosition: ImagePosition;
    jpg: string;
}

const ImagePositionLayoutMapper: Record<ImagePosition, "row" | "row-reverse"> = {
    [ImagePosition.Right]: "row",
    [ImagePosition.Left]: "row-reverse",
};

const ImagePositionPaddingRightMapper: Record<ImagePosition, string> = {
    [ImagePosition.Right]: "8",
    [ImagePosition.Left]: "0",
};

const ImagePositionPaddingLeftMapper: Record<ImagePosition, string> = {
    [ImagePosition.Right]: "0",
    [ImagePosition.Left]: "8",
};

export const FeaturedProjectCard: FC<Props> = ({
    id,
    title,
    demo,
    team,
    github,
    tags,
    description,
    highlights,
    image,
    imagePosition,
    year,
    jpg,
}) => {

    const dateColor = useColorModeValue("gray", "gray.900");

    return (
        <Flex
            justifyContent="space-between"
            id="featured-project-card"
            py={{ base: "12", md: "12", lg: '28' }}
            direction={{ base: "column-reverse", lg: ImagePositionLayoutMapper[imagePosition] }}
        >
            <Flex
                h="auto"
                pr={{ base: "0", lg: ImagePositionPaddingRightMapper[imagePosition] }}
                pl={{ base: "0", lg: ImagePositionPaddingLeftMapper[imagePosition] }}
                py={{ base: "6", lg: "0" }}
                direction="column"
                justifyContent="space-between"
                flex={{ base: 1, lg: 0.6 }}
            >
                <Box>
                    <Heading data-aos="fade-down" data-aos-offset="200" fontSize="4xl" lineHeight="1" color="accent.300">
                        {title}
                    </Heading>
                    <Text
                        pt="2"
                        pb="2"
                        fontSize="sm"
                        color={dateColor}
                        opacity="0.6"
                        data-aos="fade"
                        data-aos-delay="100"
                        data-aos-offset="200"
                    >
                        {year} • {team}
                    </Text>

                    {/* <Box
                        py="4"
                        display={{ base: "inherit", lg: "none" }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="200"
                    >
                        <Image borderRadius="xl" src={image} />
                    </Box> */}

                    <Text
                        fontSize="lg"
                        pt={{ base: 0, lg: "2" }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        borderRadius="xl"
                    >
                        {description.split("\n").map((line, i) => (
                            <span key={i}>
                                {line}
                                <br />
                                <br />
                            </span>
                        ))}
                    </Text>

                    <ProjectCardFooter highlights={highlights} />

                    <Tags tags={tags} id={id} />
                </Box>

                <ProjectCardFooter github={github} demo={demo} />
            </Flex>
            <Box
                data-aos="fade-up"
                data-aos-offset="200"
                flex={{ base: 1, lg: 0.6 }}
                pl={{ base: "0", lg: ImagePositionPaddingRightMapper[imagePosition] }}
                pr={{ base: "0", lg: ImagePositionPaddingLeftMapper[imagePosition] }}
                py="4"
            >
                <picture>
                    <source type="image/webp" srcSet={image} />
                    <source type="image/png" srcSet={jpg} />
                    <Image
                        borderRadius="md"
                        src={jpg}
                        alt={`${title}-cover-image`}
                        outline="2px solid #ff686b"
                        outlineOffset="4px"
                        boxShadow="10px 10px 0px rgba(213, 220, 249, 1)"
                    />
                </picture>
            </Box>




        </Flex>
    );
};
