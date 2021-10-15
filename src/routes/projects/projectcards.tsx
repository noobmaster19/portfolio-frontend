import { GridItem, Grid } from '@chakra-ui/layout';
import ProjectCard from './projectcard';
import { PROJECT_CARDS } from '../../config/projects';

export default function ProjectCards(props) {
    const { type } = props;
    return (
        <Grid
            templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
            gap={2}
        >
            {type == "personal" ?
                PROJECT_CARDS.map((projectDetail) => (
                    projectDetail.personal ?
                        <GridItem key={projectDetail.key} rowSpan={1} colSpan={1}>
                            <ProjectCard
                                id={projectDetail.key}
                                title={projectDetail.title}
                                description={projectDetail.description}
                                tags={projectDetail.tags}
                                image={projectDetail.image} />
                        </GridItem>
                        : null
                ))
                :
                PROJECT_CARDS.map((projectDetail) => (
                    !projectDetail.personal ?
                        <GridItem key={projectDetail.key} rowSpan={1} colSpan={1}>
                            <ProjectCard
                                id={projectDetail.key}
                                title={projectDetail.title}
                                description={projectDetail.description}
                                tags={projectDetail.tags}
                                image={projectDetail.image} />
                        </GridItem>
                        : null
                ))
            }
        </Grid>
    );
}
