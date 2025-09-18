import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRoutes } from "./routes";
import ScrollToTop from "./main/ScrollToTop";
import ScrollToHash from "./main/ScrollToHash";
import WhatsAppButton from "./main/WhatsAppButton";
import CookieConsent from "./main/CookieConsent";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { LanguageProvider } from "./LanguageContext";

const App = () => {
  const routes = useRoutes();

  return (
    <LanguageProvider>
      <Router>
        {/* Main content */}
        <ScrollToHash />
        <ScrollToTop />
        <div className="min-h-screen flex flex-col justify-between">
          <main className="flex-grow">
            <Routes>
              {routes.map(({ path, element: Element }) => (
                <Route key={path} path={path} element={<Element />} />
              ))}
            </Routes>
          </main>
        </div>
        <WhatsAppButton />
        <CookieConsent />
      </Router>
    </LanguageProvider>
  );
};

export default App;
