import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

import AppRouter from './routers/AppRouter';


function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <AppRouter />
    </QueryClientProvider>
    </>
  )
}

export default App
