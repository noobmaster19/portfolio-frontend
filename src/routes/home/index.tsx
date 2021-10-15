import { Heading, Text, HStack, Stack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'preact/hooks';
import { storeCurrentRoute } from '../../redux/actions/routeAction';
import withRouter from 'preact-router'
import RoutingButton from '../../components/widgets/RoutingButtons';


export default function Home() {
	const next = useSelector(state => state.nextRoute)
	const prev = useSelector(state => state.prevRoute)

	return (
		<Stack spacing={10} pt={10} justify="center" textAlign="center">
			<Heading size={'3xl'}>Hello! I'm Dion</Heading>
			<Text>Welcome to my interactive portfolio</Text>
			<RoutingButton justify="center"/>
		</Stack>
	);
}

