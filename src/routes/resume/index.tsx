import { h } from 'preact'
import { Heading, Text, Stack } from '@chakra-ui/layout';

const Resume = () => (
		<Stack spacing={10} pt={10} justify="center" textAlign="center">
			<Heading size={'4xl'}>Hello! I'm Dion</Heading>
			<Text>Welcome to my interactive portfolio</Text>
		</Stack>
);

export default Resume;
