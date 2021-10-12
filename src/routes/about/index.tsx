import { Heading, Text, HStack, Stack } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/button';
import { Link } from 'preact-router';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { storeCurrentRoute } from '../../redux/actions/routeAction';

export default function About() {
	const next = useSelector(state => state.nextRoute)
	const prev = useSelector(state => state.prevRoute)

	return (
		<Stack spacing={10} pt={10} justify="center" textAlign="center">
			<Heading size={'3xl'}>Nice to meet you</Heading>
			<Text>Im a year 2 computing student</Text>
			<HStack justify="center" align="center">
				<Link href={prev.href}>
					<Button colorScheme="teal" size="lg" variant="outline" w="150px" leftIcon={<ArrowLeftIcon />}>{prev.label}</Button>
				</Link>
				<Link href={next.href}>
					<Button colorScheme="teal" size="lg" variant="solid" w="150px" rightIcon={<ArrowRightIcon />}>{next.label}</Button>
				</Link>
			</HStack>
		</Stack>
	);
}
