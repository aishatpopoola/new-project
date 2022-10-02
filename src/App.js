import React from 'react';
import './App.css';
import Layout from './component/Layout';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Layout>
         <Home />
      </Layout>
    </div>
  );
}

export default App;
