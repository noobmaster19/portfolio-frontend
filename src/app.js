import { Router } from 'preact-router';
import { ChakraProvider } from "@chakra-ui/react"

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Project from './routes/projects';
import PageLayout from './components/pagelayout';
import Resume from './routes/resume';
import About from './routes/about';
import ProjectDetails from './routes/projectdetails';
import store from './redux/store'
import { Provider } from 'react-redux'
import { storeCurrentRoute } from './redux/actions/routeAction';
import theme from './theme';

export default function App() {
	const  handleRoute = async route => {
		storeCurrentRoute(route.url)
	};

	return (
		<div id="app"> 
			<Provider store={store}>
				<ChakraProvider theme={theme}>
					<PageLayout>
						<Router onChange={(url)=>handleRoute(url)}>
							<Home path="/" />
							<Project path="/projects" />
							<ProjectDetails path="/project-details/:id" />
							<Resume path="/resume" />
							<About path="/about-me" />
						</Router>
					</PageLayout>
				</ChakraProvider>
			</Provider>
		</div>
	)
};
