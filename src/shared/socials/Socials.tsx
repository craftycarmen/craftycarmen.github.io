import { FC } from "react";

import { Button, Stack, HStack, IconButton, Tooltip, useTheme } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { onResumeOpen, open } from "utils/Functions";
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, YoutubeIcon } from "utils/Icons";

const LinksToIconMapper: Record<string, JSX.Element> = {
    linkedIn: <LinkedInIcon />,
    gitHub: <GitHubIcon />,
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon />,
    youtube: <YoutubeIcon />,
    email: <MailIcon />,
};

interface Props {
    resume?: boolean;
    exclude?: Array<string>;
    delay?: number;
    color?: string;
}

export const Socials: FC<Props> = ({ resume = true, exclude, delay = 800, color }) => {
    const theme = useTheme();

    return (
        <Stack
            spacing={{ base: 4, md: 4 }}  // Stack on mobile and align horizontally on larger screens
            direction={{ base: "column", md: "row" }} // Stack vertically on mobile, horizontally on desktop
            align={{ base: "start", md: "start" }}
        >
            {resume && (
                <Tooltip
                    key="Resume"
                    label="Download Resume"
                    textTransform="capitalize"
                    bg={theme.colors.highlight[200]}
                    color={theme.colors.primary[400]}
                >
                    <Button
                        data-aos="fade"
                        data-aos-delay={delay} size="lg"
                        borderRadius="md"
                        mr="2"
                        onClick={onResumeOpen}
                        bg={theme.colors.secondary[300]}
                        color={color || theme.colors.gray[200]}
                        _hover={{ bg: theme.colors.secondary[300] }}
                    >
                        Check Out My Resume
                    </Button>
                </Tooltip>
            )}
            <HStack spacing="5" wrap="wrap" justify={{ base: "center", md: "flex-start" }}>
                {configs.common.socials.map(
                    (social, idx) =>
                        !exclude?.includes(social.type) && (
                            <Tooltip
                                key={social.type}
                                label={social.type}
                                textTransform="capitalize"
                                bg={theme.colors.highlight[200]}
                                color={theme.colors.primary[400]}
                            >
                                <Button
                                    p="0"
                                    aria-label={`${social.type}-button`}
                                    as={IconButton}
                                    variant="icon"
                                    data-aos="fade"
                                    data-aos-delay={idx * 100 + delay}
                                    fontSize={social.type === "mail" ? "24pt" : "20pt"}
                                    icon={LinksToIconMapper[social.type]}
                                    onClick={() => open(social.link)}
                                    color={color || theme.colors.secondary[400]}
                                    _hover={{ color: theme.colors.secondary[400], bg: "transparent" }}
                                />
                            </Tooltip>
                        ),
                )}
            </HStack>
        </Stack >
    );
};
