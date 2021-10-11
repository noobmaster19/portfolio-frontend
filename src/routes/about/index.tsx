import { h } from 'preact'
import { Heading, Text, Stack } from '@chakra-ui/layout';

export default function About() {
	return (
		<Stack spacing={10} pt={10} justify="center" textAlign="center">
			<Heading size={'4xl'}>About Me</Heading>
			<Text>I'm a second year student computer science student at NUS</Text>
		</Stack>
	);
}
