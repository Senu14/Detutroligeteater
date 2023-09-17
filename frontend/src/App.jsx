import React from 'react';
import Header from './Components/Partials/Header/Header';
import AppRouter from './Components/App/AppRouter/AppRouter';
import Footer from './Components/Partials/Footer/Footer';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <AppRouter />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
