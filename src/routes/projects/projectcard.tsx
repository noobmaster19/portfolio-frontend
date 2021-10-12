import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Heading, Text, HStack, GridItem, Grid, Box, Badge } from '@chakra-ui/layout';
import { Image, VStack } from "@chakra-ui/react"


export default function ProjectCard() {

    return (
        <Box boxShadow="xl" p="6" rounded="md" bg="white" overflow="hidden">
            <HStack>
                <Image display={{ "base": "none", "lg": "flex" }} src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" boxSize="150px" alignSelf="center" objectFit="cover" />
                <VStack>
                    <HStack w="100%">
                        <Heading size="md" alignSelf="flex-start">
                            OPS
                        </Heading>
                        <ArrowForwardIcon justifySelf="center" alignSelf="center" />
                    </HStack>
                    <Text alignSelf="flex-start">Loreuis nesciunt itaque voluptatum delectus sint iure dolor odio, et amet impedit.</Text>
                    <Grid templateColumns="repeat(3,1fr)" gap={1} alignSelf="flex-start">
                        <GridItem colSpan={1}>
                            <Badge colorScheme="blue">Technical</Badge>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Badge colorScheme="blue">Technical</Badge>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Badge colorScheme="blue">Technical</Badge>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Badge colorScheme="blue">Technical</Badge>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Badge colorScheme="blue">Technical</Badge>
                        </GridItem>
                    </Grid>
                </VStack>
            </HStack>
        </Box>
    );
}
