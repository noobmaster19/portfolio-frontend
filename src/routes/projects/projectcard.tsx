import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Heading, Text, HStack, GridItem, Grid, Box, Badge, Stack } from '@chakra-ui/layout';
import { Image, VStack } from "@chakra-ui/react"
import { Link } from 'preact-router';
import astronaut from "../../assets/Astronaut.png"

export default function ProjectCard(props) {
    const { id, title, description, tags, image } = props;
    return (
        <Link href={`/project-details/${id}`}>
            <Box boxShadow="xl" p="6" rounded="md" bg="gray.700" overflow="hidden">
                <HStack alignContent="flex-start">
                    <Image display={{ "base": "none", "lg": "flex" }} src={image ? image : astronaut} alt={image ? image : astronaut} boxSize="120px" alignSelf="center" objectFit="cover" />
                    <VStack h={{ base: "100%", lg: "120px" }}>
                        <Heading size="sm" alignSelf="flex-start">
                            {title}
                        </Heading>
                        <Text alignSelf="flex-start">{description}</Text>
                        <Stack direction={'row'} alignSelf="flex-start" justifySelf="end">
                            {
                                tags.map((tag) => (
                                    <Badge colorScheme={tag.color} alignSelf="auto">{tag.description}</Badge>
                                ))
                            }
                        </Stack>
                    </VStack>
                </HStack>
            </Box>
        </Link>
    );
}
