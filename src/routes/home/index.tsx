import { Heading, Text, Stack } from '@chakra-ui/layout';
import RoutingButton from '../../components/widgets/RoutingButtons';


export default function Home() {

	return (
		<Stack spacing={10} pt={10} justify="center" textAlign="center">
			<Heading size={'3xl'}>Hello! I'm Dion</Heading>
			<Text>Welcome to my interactive portfolio</Text>
			<RoutingButton justify="center"/>
		</Stack>
	);
}

