import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './App.css';

const App = () => {
  return (
   <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Navbar />

        <main className="flex-fill py-4">
          <div className="container">
            <AppRoutes />
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
