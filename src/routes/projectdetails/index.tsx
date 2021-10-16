import { Text, Stack } from '@chakra-ui/layout';
import { Tabs } from "@chakra-ui/react"
import Hero from '../../components/hero';
import { PROJECT_DETAILS } from '../../config/projects';

export default function ProjectDetail(props) {
	const id = props.matches.id
	const projectDetail = PROJECT_DETAILS.find((project)=>project.key == id)
	console.log(projectDetail)
	return (
		<Stack spacing="100px">
			<Hero
				title={projectDetail.title}
				description={projectDetail.description}
			/>
			<Tabs variant="soft-rounded" colorScheme="green">
				<Text>Hello</Text>
			</Tabs>
		</Stack>
	);
}
