import { Stack, Box } from '@chakra-ui/layout';
import { PROJECT_DETAILS } from '../../config/projects';
import ContentBlock from './ContentBlock';
import InfomationBlock from './InfomationBlock';
import { ScaleFade } from '@chakra-ui/react';

export default function ProjectDetail(props) {
	const id = props.matches.id
	const projectDetail = PROJECT_DETAILS.find((project) => project.key == id)
	console.log(projectDetail)
	return (
		<>
			<Stack spacing="50px">
				<InfomationBlock
					titleSize={'xl'}
					title={projectDetail.title}
					description={projectDetail.description}
				/>
				<ScaleFade initialScale={0.8} in={true} unmountOnExit>
				<Box _hover={{bg:'gray.600',transform:'translate3D(0,-1px,0) scale(1.02)'}} boxShadow="xl" p="6" rounded="md" bg="gray.700" overflow="hidden">
					test
					</Box>
				</ScaleFade>
				<ContentBlock />
			</Stack>
		</>
	);
}
