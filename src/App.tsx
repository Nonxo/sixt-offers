import React from 'react';
import './App.css';
import Dashboard from "./pages/Dashboard";
import Footer from "./basic-components/Footer";

function App() {
  return (
    <div className="container flex flex-col mx-auto my-5 max-h-screen">
      <Dashboard />
        <Footer />
    </div>
  );
}

export default App;
