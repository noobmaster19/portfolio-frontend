import { Heading, Text, HStack, Stack } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/button';
import { Link } from 'preact-router';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { storeCurrentRoute } from '../../redux/actions/routeAction';

export default function Resume() {
	const next = useSelector(state => state.nextRoute)
	const prev = useSelector(state => state.prevRoute)

	return (
		<Stack spacing={10} pt={10} justify="center" textAlign="center">
			<Heading size={'3xl'}>Resume</Heading>
			<Text>my skills</Text>
			<HStack justify="center" align="center">
				<Link href={prev.href}>
					<Button colorScheme="teal" size="lg" variant="outline" leftIcon={<ArrowLeftIcon />}>{prev.label}</Button>
				</Link>
				<Link href={next.href}>
					<Button colorScheme="teal" size="lg" variant="solid" rightIcon={<ArrowRightIcon />}>{next.label}</Button>
				</Link>
			</HStack>
		</Stack>
	);
}
