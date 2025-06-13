import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { Colors } from './pages/Colors';
import { TypographyPage } from './pages/Typography';
import { Spacing } from './pages/Spacing';
import { Buttons } from './pages/Components/Buttons';
import { Cards } from './pages/Components/Cards';

function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/typography" element={<TypographyPage />} />
            <Route path="/spacing" element={<Spacing />} />
            <Route path="/components/buttons" element={<Buttons />} />
            <Route path="/components/cards" element={<Cards />} />
            <Route path="/components/forms" element={<div>Forms - Coming Soon</div>} />
            <Route path="/components/navigation" element={<div>Navigation - Coming Soon</div>} />
            <Route path="/components/data-display" element={<div>Data Display - Coming Soon</div>} />
            <Route path="/patterns/layout" element={<div>Layout Patterns - Coming Soon</div>} />
            <Route path="/patterns/navigation" element={<div>Navigation Patterns - Coming Soon</div>} />
            <Route path="/patterns/forms" element={<div>Form Patterns - Coming Soon</div>} />
            <Route path="/resources/icons" element={<div>Icons - Coming Soon</div>} />
            <Route path="/resources/images" element={<div>Images - Coming Soon</div>} />
            <Route path="/resources/animation" element={<div>Animation - Coming Soon</div>} />
          </Routes>
        </Layout>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;