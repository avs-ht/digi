import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'

import '$/app/styles/index.scss'
import { MainPage } from './pages/MainPage'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<MainPage />
	</QueryClientProvider>,
)
