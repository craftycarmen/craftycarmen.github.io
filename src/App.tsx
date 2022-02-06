import { FC } from "react";

import { Box, Container } from "@chakra-ui/react";

import { Navbar } from "shared/navbar/Navbar";
import { Landing } from "pages/landing/Landing";
import { PageHeader } from "shared/page-header/PageHeader";
import { NavbarHeight } from "theme";
import { FeaturedProjects } from "pages/featured-projects/FeaturedProjects";
import { OtherProjects } from "pages/other-projects/OtherProjects";

import "./App.scss";

export const App: FC = () => {
    return (
        <Container h="100%" px={{ base: 6, md: 24, lg: 6 }}>
            <Navbar />
            <Box mt={{ base: "96px", md: NavbarHeight }} h="100%">
                <Landing />
                <PageHeader id="page-featured-projects" label="Featured Projects" />
                <FeaturedProjects />
                <PageHeader id="page-other-projects" label="other Projects" />
                <OtherProjects />
            </Box>
        </Container>
    );
};
