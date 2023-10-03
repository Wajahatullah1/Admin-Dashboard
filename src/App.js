import TopBar from './components/topbar/TopBar';
import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/userslist/UserList';
import User from './components/user/User';
import Product from './components/products/Product';

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container flex">
        <Sidebar />
        
        {/* Define your routes within the <Routes> component */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route path="/users" element = {<UserList/>}/>
          <Route path ="/user/:userId" element={<User/>} />
          <Route path ="/products" element={<Product/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
