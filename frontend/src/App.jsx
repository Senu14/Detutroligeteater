import Header from './Components/Partials/Header/Header';
import AppRouter from './Components/App/AppRouter/AppRouter';
import Footer from './Components/Partials/Footer/Footer';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

import './App.css';

function App() {
  const queryClient = new QueryClient();


  return (
    <>
    <QueryClientProvider client={queryClient}>

    <Header />
    <AppRouter />
    <Footer />
    </QueryClientProvider>
      
    </>
  );
}

export default App;
