import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

import AppRouter from './routers/AppRouter';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Router>
      <AppRouter />
    </Router>
    </QueryClientProvider>
    </>
  )
}

export default App
