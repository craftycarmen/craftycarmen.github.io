import { ThemeConfig, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import { GunmetalColors, CoralColors, TealColors, LavenderColors, WhiteColors, YellowColors } from "theme/colors/Colors";
import { components } from "theme/component-styles/ComponentStyles";

const config: ThemeConfig = {
    cssVarPrefix: "hp",
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
    },
    withDefaultColorScheme({ colorScheme: "primary" }),
);
