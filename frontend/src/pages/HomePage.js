import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { ExampleShowcase } from '../components/ExampleShowcase';
import { About } from '../components/About';
import { BlogPreview } from '../components/BlogPreview';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <ExampleShowcase />
        <About />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
};
