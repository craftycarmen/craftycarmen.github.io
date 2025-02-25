import { FC, useState } from "react";

import { Text, Box, UnorderedList, Accordion, AccordionItem } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { Expandable } from "pages/about/common/expandable/Expandable";
import { ArticleTitle, SectionTitle } from "pages/about/common/title/Title";

export const Education: FC = () => {
    const [educationExpanded, setEducationExpanded] = useState<number[]>([]);

    return (
        <>
            <ArticleTitle title="Education" />

            <br />

            {configs.about.educations.map((edu) => (
                <Box p="0" mb="4" key={`education-${edu.id}`}>

                    <SectionTitle title={edu.school} fontWeight="semibold" />
                    <Text data-aos="fade" fontWeight="600">{edu.degree}</Text>
                    <Text color="gray" data-aos="fade-up" fontSize="sm">
                        {edu.duration}
                    </Text>
                    <UnorderedList listStylePosition="outside" pl="1">
                        <Text as="li" pt="2" data-aos="fade">
                            {edu.content}
                        </Text>
                    </UnorderedList>
                </Box>
            ))}
            {/* <Accordion pt="2" allowMultiple index={educationExpanded} id="education">
                {configs.about.educations.map((edu, idx) => (
                    <AccordionItem p="0" border="0" mb="4" key={`panel-${edu.school}-${edu.degree}`}>
                        <Expandable
                            title={edu.school}
                            subTitle={edu.degree}
                            date={edu.duration}
                            content={edu.content}
                            id={edu.id}
                            idx={idx}
                            onChange={setEducationExpanded}
                            expanded={educationExpanded}
                        />
                    </AccordionItem>
                ))}
            </Accordion> */}
        </>
    );
};
