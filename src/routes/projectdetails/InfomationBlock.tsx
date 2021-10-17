import { Heading, Text, GridItem, Grid, Box, Stack, HStack } from '@chakra-ui/layout';
import RoutingButton from '../../components/widgets/RoutingButtons'
import { ScaleFade, Tag, Avatar } from '@chakra-ui/react';
import django from '../../assets/techlogo/django.png'
import react from '../../assets/techlogo/react.svg'
import postgresql from '../../assets/techlogo/postgresql.svg'

export default function InfomationBlock(props) {
    const { titleSize, title, description } = props
    return (
        <Grid
            templateRows={{ base: "repeat(2,1fr)", md: "1fr" }}
            templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
            pt={5}
            gap={4}
        >
            <GridItem rowSpan={1} colSpan={1} h="100%">
                <Stack spacing="24px" textAlign={{ base: "center", md: "start" }} >
                    <Heading size={titleSize}>{title}</Heading>
                    <Text>{description}</Text>
                    <RoutingButton justify={{ base: "center", md: "start" }} />
                </Stack>
            </GridItem>

            <ScaleFade initialScale={0.8} in={true} unmountOnExit>
                <GridItem rowSpan={1} colSpan={1} alignContent="center" h="100%">
                    <Box boxShadow="xl" p="6" rounded="md" bg="gray.700" overflow="hidden" w="100%" h="100%">
                        <Stack spacing="12px">
                            <Stack spacing="4px">
                                <Heading size="sm">Timeline</Heading>
                                <Text>3 Months</Text>
                            </Stack>
                            <Stack spacing="4px">
                                <Heading size="sm">Role</Heading>
                                <HStack>
                                    <Tag>Founder</Tag>
                                    <Tag>Business Developement</Tag>
                                    <Tag> Core Developer</Tag>
                                </HStack>
                            </Stack>
                            <Stack spacing="4px">
                                <Heading size="sm">Key tools</Heading>
                                <HStack>
                                    <Tag>Redux</Tag>
                                    <Tag>Ant-D</Tag>
                                </HStack>
                            </Stack>
                            <Stack spacing="4px">
                                <Heading size="sm">Technology Stack</Heading>
                                <Stack direction="row">
                                    <Avatar name={django} src={django} size="md" bg="gray.800" borderColor="teal.400" showBorder />
                                    <Avatar name={postgresql} size="md" src={postgresql} bg="gray.800" borderColor="teal.400" showBorder />
                                    <Avatar name={react} size="md" src={react} bg="none" borderColor="teal.400" showBorder />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </GridItem>
            </ScaleFade>
        </Grid>
    );
}
