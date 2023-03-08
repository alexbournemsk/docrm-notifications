import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from './pages/Customers/Customers';
import Settings from './pages/Settings/Settings';
import FilterPage from './pages/Filter/FilterPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/docrm">
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Settings />}></Route>
            <Route path="teacher/customers" element={<Customers />}></Route>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="filter" element={<FilterPage />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);