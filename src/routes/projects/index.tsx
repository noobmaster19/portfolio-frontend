import { Stack } from '@chakra-ui/layout';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Hero from '../../components/hero';
import ProjectCards from './projectcards';
import { useState } from 'preact/hooks';

export default function Projects() {
	const [animate, setToggle] = useState(true);
	const onToggle = () => setToggle(!animate);

	return (
		<Stack spacing="100px">
			<Hero
				titleSize={'3xl'}
				title="Key Projects"
				description="Here are some key projects that i've been working on for the past 1.5 years"
			/>
			<Tabs variant="soft-rounded" colorScheme="green" onChange={onToggle}>
				<TabList>
					<Tab color='gray.400'>Personal</Tab>
					<Tab color='gray.400'>Professional</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<ProjectCards type="personal" animate={animate} />
					</TabPanel>
					<TabPanel>
						<ProjectCards type="professional" animate={!animate} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Stack>
	);
}
