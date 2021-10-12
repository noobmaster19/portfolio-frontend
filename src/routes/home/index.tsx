import { Heading, Text, HStack, Stack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'preact/hooks';
import { storeCurrentRoute } from '../../redux/actions/routeAction';
import withRouter from 'preact-router'


export default function Home() {
	const next = useSelector(state => state.nextRoute)
	const prev = useSelector(state => state.prevRoute)

	return (
		<Stack spacing={10} pt={10} justify="center" textAlign="center">
			<Heading size={'4xl'}>Hello! I'm Dion</Heading>
			<Text>Welcome to my interactive portfolio</Text>
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

