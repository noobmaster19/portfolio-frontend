import { Router } from 'preact-router';
import { ChakraProvider} from "@chakra-ui/react"

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Project from './routes/projects';
import PageLayout from './components/pagelayout';
import Resume from './routes/resume';
import About from './routes/about';

export default function App() {
	return (
		<div id="app">
			<ChakraProvider>
				<PageLayout>
					<Router>
						<Home path="/" />
						<Project path="/projects"/>
						<Resume path="/resume"/>
						<About path="/about-me"/>
					</Router>
				</PageLayout>
			</ChakraProvider>
		</div>
	)
};
