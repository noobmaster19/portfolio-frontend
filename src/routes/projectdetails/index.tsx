<<<<<<< HEAD
import { Heading, Text, HStack, GridItem, Grid, Container, Stack, Box } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/button';
import { Link } from 'preact-router';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Hero from '../../components/hero';
import { PROJECT_DETAILS } from '../../config/projects';

export default function ProjectDetail(props) {
	const id = props.matches.id
	const projectDetail = PROJECT_DETAILS.find((project)=>project.key == id)
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
=======
import { Heading, Text, HStack, GridItem, Grid, Container, Stack, Box } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/button';
import { Link } from 'preact-router';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
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
>>>>>>> b240af70f580e996310a3b2bbfc299eab4984b04
