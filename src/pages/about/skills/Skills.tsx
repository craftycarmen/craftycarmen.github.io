import { FC } from "react";

import { Box, Grid } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { Tags } from "shared/tags/Tags";
import { ArticleTitle, SectionTitle } from "../common/title/Title";

export const Skills: FC = () => {
    return (
        <>
            <ArticleTitle title="Skills" pb="2" />

            <br />
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="4">
                {configs.about.skills.map((skill) => (
                    <Box p="0" mb="4" key={`skills-${skill.title}`}>
                        <SectionTitle title={skill.title} />
                        <Tags id={`skills-tags-${skill.title}`} tags={skill.tools} />
                    </Box>
                ))}
            </Grid>

            {/* {configs.about.skills.map((skill) => (
                <Box p="0" mb="4" key={`skills-${skill.title}`}>
                    <SectionTitle title={skill.title} />
                    <Tags id={`skills-tags-${skill.title}`} tags={skill.tools} />
                </Box>
            ))} */}
        </>
    );
};
