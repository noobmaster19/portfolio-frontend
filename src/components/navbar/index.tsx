import { h } from 'preact'
import {
	Box,
	Flex,
	IconButton,
	Collapse,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	Link,
	HStack
} from '@chakra-ui/react';
import {
	HamburgerIcon,
	CloseIcon,
} from '@chakra-ui/icons';
import {
	DesktopNav
} from './desktopVer'
import {
	MobileNav
} from './mobileVer'
import { SOCIAL_MEDIA } from '../../config/navBar';

export default function NavBar() {
	const { isOpen, onToggle } = useDisclosure();
	const linkHoverColor = useColorModeValue('gray.900', 'white');
	return (
		<Box w="100%">
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}
				justify={'center'}>
				<Flex
					display={{ md: 'none' }}>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={useBreakpointValue({ base: 'start', md: 'center' })}>
					<Flex display={{ base: 'none', md: 'flex' }}>
						<DesktopNav />
					</Flex>
				</Flex>
				<HStack display={{ md: 'none' }}>
					{SOCIAL_MEDIA.map((socialMediaItem) => (
							<Link
								key={socialMediaItem.label}
								p={2}
								href={socialMediaItem.href ?? '#'}
								fontSize={'sm'}
								fontWeight={500}
								_hover={{
									textDecoration: 'none',
									color: linkHoverColor,
								}}>
								{socialMediaItem.svg}
							</Link>
					))}
				</HStack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}