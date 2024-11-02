import React from 'react';
import { Layout } from './components/Layout';
import { Analytics } from './components/Analytics';
import { CaseGrid } from './components/CaseGrid';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AnimatedTitle } from './components/AnimatedTitle';

function App() {
  return (
    <Layout>
      {(isDark, setIsDark) => (
        <>
          <Header isDark={isDark} setIsDark={setIsDark} />
          <main className="flex-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
              <AnimatedTitle />
              <Analytics />
              <CaseGrid />
            </div>
          </main>
          <Footer />
        </>
      )}
    </Layout>
  );
}

export default App;