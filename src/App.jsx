import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import AdminLayout from "./admin/AdminLayout";
import ScrollToTop from "./components/ScrollToTop"; // <-- 1. Import it here

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Facilities from "./components/Facilities";
import Testimonials from "./pages/Testimonials"; 
import Blogs from "./pages/Blogs";

import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import AdminAppointments from "./admin/Appointments";
import AdminEvents from "./admin/Events";
import { LanguageProvider } from "./components/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop /> {/* <-- 2. Place it right here */}
        <Routes>
          {/* ================= PUBLIC DOCTOR WEBSITE ================= */}

          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />

          <Route
            path="/facilities"
            element={
              <Layout>
                <div className="pt-6">
                  <Facilities />
                </div>
              </Layout>
            }
          />

          <Route
            path="/patient-stories"
            element={
              <Layout>
                <Testimonials />
              </Layout>
            }
          />

          <Route
            path="/blogs"
            element={
              <Layout>
                <Blogs />
              </Layout>
            }
          />

          <Route
            path="/appointment"
            element={
              <Layout>
                <Appointment />
              </Layout>
            }
          />

          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />

          {/* Legacy Hospital Route Redirects */}
          <Route path="/doctors" element={<Navigate to="/about" replace />} />
          <Route path="/departments" element={<Navigate to="/services" replace />} />

          {/* ================= ADMIN PORTAL ================= */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
          <Route path="/admin/appointments" element={<AdminLayout><AdminAppointments /></AdminLayout>} />
          <Route path="/admin/events" element={<AdminLayout><AdminEvents /></AdminLayout>} />

          {/* 404 Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;