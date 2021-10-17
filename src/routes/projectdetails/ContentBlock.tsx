import { Stack, Text, Heading, Container } from '@chakra-ui/layout';
import Hero from '../../components/hero';
import { PROJECT_DETAILS } from '../../config/projects';

export default function ContentBlock(props) {
    const {header,content} = props;
	return (
		<>
			<Container maxW="container.xl" border="1px">
                <Heading size="md">Hello test</Heading>
                <Text>Hello Test</Text>
            </Container>
		</>
	);
}
