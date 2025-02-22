import { FC } from "react";

import { HStack, IconButton, StyleProps, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { bgDark, bgLight } from "theme";

import { MoonIcon, SunIcon } from "utils/Icons";

export const ColorModeButton: FC<StyleProps> = (props) => {
    const color = useColorModeValue(bgDark, bgLight);
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack {...props}>
            <IconButton
                aria-label="appearance"
                bg="transparent"
                color="yellow.300"
                fontSize="lg"
                _hover={{ bg: "transparent" }}
                // _active={{ bg: "transparent" }}
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                variant="ghost"
                size="xs"
                onClick={() => {
                    toggleColorMode();
                    window.scrollBy(0, 1);
                    window.scrollBy(0, -1);
                }}
                w="32px"
                h="32px"
            />
        </HStack>
    );
};
