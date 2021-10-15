import { Heading, Text, HStack, GridItem, Grid, Container, Stack } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/button';
import { Link } from 'preact-router';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import RoutingButton from '../widgets/RoutingButtons';
import { useBreakpointValue } from '@chakra-ui/media-query';

export default function Hero(props) {

    return (
        <Grid
            templateRows={{ base: "repeat(2,1fr)", md: "1fr" }}
            templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
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
