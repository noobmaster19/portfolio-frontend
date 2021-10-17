import {
	Box,
	Flex,
	Text,
	Stack,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
} from '@chakra-ui/react';
import {
	ChevronRightIcon,
} from '@chakra-ui/icons';
import {
	SOCIAL_MEDIA,
	NAV_ITEMS,
	NavItem
} from '../../config/navBar'
import { useSelector } from 'react-redux';

export const DesktopNav = () => {
	const currentRoute = useSelector(state => state.currentRoute)

	return (
		<>
			<Stack direction={'row'} spacing={4}>
				{NAV_ITEMS.map((navItem) => (
					<Box key={navItem.label}>
						<Popover trigger={'hover'} placement={'bottom-start'}>
							<PopoverTrigger>
								<Link
									p={2}
									href={navItem.href ?? '#'}
									fontSize={'sm'}
									fontWeight={500}
									color={navItem.href == currentRoute ? 'gray.800' : 'gray.400'}
									bg ={navItem.href == currentRoute ? 'teal.200' : null}
									rounded={'sm'}
									_hover={{
										textDecoration: 'none',
										bgColor: navItem.href == currentRoute ? 'teal.300': null,
										color:  navItem.href == currentRoute ? 'gray.800': 'white',
									}}>
									{navItem.label}
								</Link>
							</PopoverTrigger>

							{navItem.children && (
								<PopoverContent
									border={0}
									boxShadow={'xl'}
									bg={'gray.600'}
									p={4}
									rounded={'xl'}
									minW={'sm'}>
									<Stack>
										{navItem.children.map((child) => (
											<DesktopSubNav key={child.label} {...child} />
										))}
									</Stack>
								</PopoverContent>
							)}
						</Popover>
					</Box>
				))}
				{SOCIAL_MEDIA.map((socialMediaItem) => (
					<Box key={socialMediaItem.label}>
						<Link
							key={socialMediaItem.label}
							p={2}
							href={socialMediaItem.href ?? '#'}
							fontSize={'sm'}
							fontWeight={500}
							color={'gray.400'}
							_hover={{
								textDecoration: 'none',
								color: 'white',
							}}>
							{socialMediaItem.svg}
						</Link>
					</Box>
				))}
			</Stack>
		</>
	);
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
	return (
		<Link
			href={href}
			role={'group'}
			display={'block'}
			p={2}
			rounded={'md'}
			_hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
			<Stack direction={'row'} align={'center'}>
				<Box>
					<Text
						transition={'all .3s ease'}
						_groupHover={{ color: 'pink.400' }}
						fontWeight={500}>
						{label}
					</Text>
					<Text fontSize={'sm'}>{subLabel}</Text>
				</Box>
				<Flex
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
					justify={'flex-end'}
					align={'center'}
					flex={1}>
					<Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	);
};