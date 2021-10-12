import {GridItem, Grid } from '@chakra-ui/layout';
import ProjectCard from './projectcard';


export default function ProjectCards() {

    return (
        <Grid
            templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
            gap={2}
        >
            <GridItem rowSpan={1} colSpan={1}>
                <ProjectCard/>
            </GridItem>
        </Grid>
    );
}
