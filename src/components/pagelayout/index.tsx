import {
    Container,
    Stack,
} from '@chakra-ui/react';
import NavBar from '../navbar';

export default function PageLayout(props) {
    return (
        <Stack justify='center' align='center'>
            <NavBar />
            <Container maxW="container.xl">
                {props.children}
            </Container>
        </Stack>
    );
};
