import { FC, useEffect } from "react";
import { HStack, IconButton, StyleProps, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { bgDark, bgLight } from "theme";
import { MoonIcon, SunIcon } from "utils/Icons";

export const ColorModeButton: FC<StyleProps> = (props) => {
    const { colorMode, toggleColorMode, setColorMode } = useColorMode();
    const color = useColorModeValue(bgDark, bgLight);

    // On initial load, check if there's a saved color mode in localStorage
    useEffect(() => {
        const savedColorMode = localStorage.getItem("colorMode");
        if (savedColorMode) {
            // Set the Chakra UI color mode to match what's saved in localStorage
            setColorMode(savedColorMode);
        }
    }, [setColorMode]);

    // Toggle color mode
    const handleToggle = () => {
        // Toggle the Chakra color mode
        toggleColorMode();

        // Save the new color mode to localStorage
        const newColorMode = colorMode === "light" ? "dark" : "light";
        localStorage.setItem("colorMode", newColorMode);

        // Optional: For smooth UI transitions, scroll by a small amount
        window.scrollBy(0, 1);
        window.scrollBy(0, -1);
    };

    return (
        <HStack {...props}>
            <IconButton
                aria-label="appearance"
                bg="transparent"
                color="yellow.300"
                fontSize="lg"
                _hover={{ bg: "transparent" }}
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                variant="ghost"
                size="xs"
                onClick={handleToggle}
                w="32px"
                h="32px"
            />
        </HStack>
    );
};
