import { HStack } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/button';
import { Link } from 'preact-router';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

export default function RoutingButton(props) {
    const next = useSelector(state => state.nextRoute)
    const prev = useSelector(state => state.prevRoute)
    return (
        <HStack align="center" justify={props.justify}>
            <Link href={prev.href}>
                <Button colorScheme="teal" size="lg" variant="outline" w="150px" leftIcon={<ArrowLeftIcon />}>{prev.label}</Button>
            </Link>
            <Link href={next.href}>
                <Button colorScheme="teal" size="lg" variant="solid" w="150px" rightIcon={<ArrowRightIcon />}>{next.label}</Button>
            </Link>
        </HStack>
    );
}
