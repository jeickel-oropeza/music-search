import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Router'
import { Authentication } from './components/Authentication'

function App() {
	return (
		<BrowserRouter>
			<Authentication>
				<AppRouter />
			</Authentication>
		</BrowserRouter>
	)
}

export default App
