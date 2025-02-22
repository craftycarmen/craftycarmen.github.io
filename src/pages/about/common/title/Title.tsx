import { FC } from "react";

import { Heading, StyleProps, Text } from "@chakra-ui/react";

interface Props extends StyleProps {
    title: string;
}

export const ArticleTitle: FC<Props> = ({ title, ...props }) => {
    return (
        <Heading fontSize="2xl" color="accent.300" fontWeight="bold" {...props} data-aos="fade-down">
            {title}
        </Heading>
    );
};

export const SectionTitle: FC<Props> = ({ title, ...props }) => {
    return (
        <>
            {(title !== "Programming" && title !== "Frontend Development" && title !== "Backend Development" && title !== "Databases" && title !== "Dev Practices & Tools" && title !== "Strategy & Design") ?
                (
                    <Text fontWeight="semibold" color="primary.400" backgroundColor="highlight.200" width="fit-content" fontSize="xl" fontFamily="Outfit" {...props} data-aos="fade-down">
                        {title}
                    </Text>
                )
                : (
                    <Text fontWeight="semibold" fontSize="xl" fontFamily="Outfit" {...props} data-aos="fade-down">
                        {title}
                    </Text>
                )

            }
        </>
    );
};
