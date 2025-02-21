import { FC } from "react";

import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

interface Props {
    text: {
        mobile: string;
        desktop: string;
    };
}

export const LogoType: FC<Props> = ({ text }) => {
    const variant = useBreakpointValue({ base: text.mobile, md: text.desktop });

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <Box
            transition="all 0.2s ease-in-out"
            _hover={{ cursor: "pointer", color: "primary.600" }}
            onClick={handleClick}
        >
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" lineHeight="1" fontFamily="Outfit" mb={{ base: 0, md: -2 }} color="accent.300">
                {variant}
            </Text>
        </Box>
    );
};
