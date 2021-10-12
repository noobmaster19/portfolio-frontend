import { Router , getCurrentUrl} from 'preact-router';
import { ChakraProvider } from "@chakra-ui/react"

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Project from './routes/projects';
import PageLayout from './components/pagelayout';
import Resume from './routes/resume';
import About from './routes/about';
import store from './redux/store'
import { Provider } from 'react-redux'
import { storeCurrentRoute } from './redux/actions/routeAction';

export default function App() {
	const  handleRoute = async route => {
		storeCurrentRoute(route.url)
	};

	return (
		<div id="app"> 
			<Provider store={store}>
				<ChakraProvider>
					<PageLayout>
						<Router onChange={(url)=>handleRoute(url)}>
							<Home path="/" />
							<Project path="/projects" />
							<Resume path="/resume" />
							<About path="/about-me" />
						</Router>
					</PageLayout>
				</ChakraProvider>
			</Provider>
		</div>
	)
};
