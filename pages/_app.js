import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'


if (false) {
  require('mocks')
}

export default function App({ Component, pageProps }) {

	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
						retry: false,
						cacheTime: 0,
					},
				},
			})
	)
	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
		</QueryClientProvider>
	)
}
