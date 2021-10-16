import {
    Container,
    ScaleFade,
    Stack,
} from '@chakra-ui/react';
import NavBar from '../navbar';

export default function PageLayout(props) {
    return (
        <Stack justify='center' align='center'>
            <NavBar />
                <Container maxW="container.xl" pl={{ base: "5", md: "20" }} pr={{ base: "5", sm: "5", md: "20" }}>
                    {props.children}
                </Container>
        </Stack>
    );
};
