import { Heading, Text, HStack, GridItem, Grid, Container, Stack } from '@chakra-ui/layout';
import RoutingButton from '../widgets/RoutingButtons';

export default function Hero(props) {
    return (
        <Grid
            templateRows={{ base: "repeat(2,1fr)", md: "1fr" }}
            templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
            h={{base:"80vh",md:"100%"}}
            pt={10}
            gap={4}
        >
            <GridItem rowSpan={1} colSpan={1}>
                <Stack spacing="24px" textAlign={{base: "center" , md: "start"}} >
                    <Heading size={'3xl'}>{props.title}</Heading>
                    <Text>{props.description}</Text>
                    <RoutingButton justify={{base: "center" , md: "start"}}/>
                </Stack>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} border="solid" alignContent="center">
                <Container>Insert 3D animation here</Container>
            </GridItem>
        </Grid>
    );
}
