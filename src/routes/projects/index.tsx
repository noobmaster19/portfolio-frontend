import { Heading, Text, HStack, GridItem, Grid, Container, Stack, Box } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/button';
import { Link } from 'preact-router';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Hero from '../../components/hero';
import ProjectCards from './projectcards';

export default function Projects() {

	return (
		<Stack spacing="100px">
			<Hero
				title="Key Projects"
				description="Here are some key projects that i've been working on for the past 1.5 years"
			/>
			<Tabs variant="soft-rounded" colorScheme="green">
				<TabList>
					<Tab>Personal</Tab>
					<Tab>Professional</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<ProjectCards />
					</TabPanel>
					<TabPanel>
						<ProjectCards />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Stack>
	);
}
