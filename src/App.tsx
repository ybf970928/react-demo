import React from 'react';
import './App.css';
import { Header } from './components/Header/index'
import { Content } from './components/Content/index'
import { Footer } from './components/Footer/index'
const App: React.FC = () => {
      return (
        <div className="app">
          <Header />
          <Content />
          <Footer />
        </div>
      )
}

export default App;
