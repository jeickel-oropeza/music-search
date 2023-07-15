import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'
import { ThemeConfig } from './config/theme.config.jsx'

const queryClientProvider = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClientProvider}>
      <ThemeConfig>
        <App />
      </ThemeConfig>
    </QueryClientProvider>
  </React.StrictMode>,
)
