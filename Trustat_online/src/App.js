import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer, EditPassword, EditNote } from "./components";
import {
  Home,
  Error,
  EmailVerification,
  PhishingAnalysis,
  ProxyDetection,
  Learning,
  PrivateRoute,
  Register,
  AboutPage,
  Activity,
  Contact,
  RenderPassword,
  RenderNote,
  RegisterPassword,
  RegisterNote,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="EmailVerification" element={<EmailVerification />} />
        <Route path="PhishingAnalysis" element={<PhishingAnalysis />} />
        <Route path="ProxyDetection" element={<ProxyDetection />} />
        <Route path="Learning" element={<Learning />} />
        <Route path="register" element={<Register />} />
        <Route path="AboutPage" element={<AboutPage />} />
        <Route path="Contact" element={<Contact />} />
        
        <Route
          path="products/activity"
          element={
            <PrivateRoute>
              <Activity />
            </PrivateRoute>
          }
        />
        <Route path="password" element={<RenderPassword />} />
        <Route path="note" element={<RenderNote />} />
        <Route
          path="password/registerpassword"
          element={<RegisterPassword />}
        />
        <Route path="note/registernote" element={<RegisterNote />} />
        <Route path="edit/:id" element={<EditPassword />} />
        <Route path="editnote/:id" element={<EditNote />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
