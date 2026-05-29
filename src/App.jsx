

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { useAuth } from "./context/AuthContext";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import Profile from "./pages/Profile";
import Navbar from './components/Navbar';
import ThemesPage from "./pages/ThemesPage";
import Analytics from "./pages/Analytics";

import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

import { Toaster } from "react-hot-toast";

import Verified from "./pages/Verified";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
   const { user } = useAuth();
  return (
    <BrowserRouter>
         {!user && <Navbar />}
    
        <Routes>

        
           <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/" />} />
         

         

          
          {/*<Route path="/" element={<Home />} />*/}
          {/* 🔒 صفحات محمية */}
        <Route path="/" element={
            user ? (
              <Layout>
                <Dashboard />
              </Layout>
            ) : (
              <Home /> // أو Login
            )
          }
        />
        <Route path="/themes" element={
            user ? (
              <Layout>
                <ThemesPage />
              </Layout>
            ) : (
              <Home /> // أو Login
            )
          }
        />
        <Route
  path="/verify"
  element={<Verified/>}
/>

<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

<Route
  path="/reset-password"
  element={<ResetPassword />}
/>

        <Route
  path="/analytics"
  element={
    user ? (
      <Layout>
        <Analytics />
      </Layout>
    ) : (
      <Home />
    )
  }
/>




 <Route
  path="/settings"
  element={
    user ? (
      <Layout>
        <Settings />
      </Layout>
    ) : (
      <Home />
    )
  }
/>


        
          
          <Route path="/u/:username" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
         
          


        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
    
    </BrowserRouter>
  );
}


/*
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

     
export default function App(){
  return (
    <BrowserRouter>
     <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/:username' element={<Profile/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

*/