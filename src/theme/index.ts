import { ThemeConfig, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import { GunmetalColors, CoralColors, TealColors, LavenderColors, WhiteColors, YellowColors } from "theme/colors/Colors";
import { components } from "theme/component-styles/ComponentStyles";

const config: ThemeConfig = {
    cssVarPrefix: "hp",
    initialColorMode: "system",
    useSystemColorMode: true,
};

const fonts = {
    body: "'Inter', serif",
    heading: "'Outfit', serif",
};

const colors = {
    primary: {
        ...GunmetalColors,  // Replacing PrimaryColors
    },
    accent: {
        ...CoralColors,  // Can use this for buttons, highlights, etc.
    },
    secondary: {
        ...TealColors,
    },
    highlight: {
        ...LavenderColors,
    },
    gray: {
        ...WhiteColors,  // White can be used in place of gray
    },
    background: {
        light: "gray.200",
        dark: "primary.400"
    }
};

export const bgLight = "gray.200";
export const bgDark = "primary.400";
export const NavbarHeight = "144px";

export const theme = extendTheme(
    {
        config,
        colors,
        fonts,
        components,
        styles: {
            global: (props: { colorMode: string }) => ({
                "html, body": {
                    backgroundColor: props.colorMode === "dark" ? "primary.400" : "gray.200",
                    color: props.colorMode === "dark" ? "gray.200" : "primary.400",
                    // transition: "background-color 0.2s ease-in-out",
                },
            }),
        },
    },
    withDefaultColorScheme({ colorScheme: "primary" }),
);
