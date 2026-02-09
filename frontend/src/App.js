import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { HomePage } from './pages/HomePage';
import { ENekrologPage } from './pages/ENekrologPage';
import { MemoryPage } from './pages/MemoryPage';
import { CreateNekrologPage } from './pages/CreateNekrologPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { Toaster } from './components/ui/sonner';
import './App.css';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-nekrolog" element={<CreateNekrologPage />} />
          <Route path="/e-nekrolog" element={<ENekrologPage />} />
          <Route path="/karta-pamieci" element={<MemoryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
        <Toaster />
      </Router>
    </LanguageProvider>
  );
}
