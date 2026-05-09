import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ui/ScrollToTop';
import { ThemeProvider } from './hooks/useTheme';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Menu = lazy(() => import('./pages/Menu'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-12 h-12 border-4 border-maroon-200 border-t-maroon-700 rounded-full animate-spin dark:border-gray-700 dark:border-t-gold-500" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Suspense fallback={<LoadingSpinner />}><Home /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<LoadingSpinner />}><About /></Suspense>} />
          <Route path="/services" element={<Suspense fallback={<LoadingSpinner />}><Services /></Suspense>} />
          <Route path="/gallery" element={<Suspense fallback={<LoadingSpinner />}><Gallery /></Suspense>} />
          <Route path="/menu" element={<Suspense fallback={<LoadingSpinner />}><Menu /></Suspense>} />
          <Route path="/testimonials" element={<Suspense fallback={<LoadingSpinner />}><Testimonials /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<LoadingSpinner />}><Contact /></Suspense>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
