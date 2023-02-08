import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import CrewLists from './Pages/CrewLists';
import MyClub from './Pages/MyClub';
import SiteInfo from './Pages/SiteInfo';
import ClubMembers from './Pages/ClubMembers';
import MemberAccount from './Pages/MemberAccount';
import AddMember from './Pages/AddMember';
import AddInfo from './Pages/AddInfo';
import ComponentLibrary from './Pages/ComponentLibrary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route index element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/crew-lists' element={<CrewLists />} />
      <Route path='/my-club' element={<MyClub />} />
      <Route path='/site-information' element={<SiteInfo />} />
      <Route path='/club-members' element={<ClubMembers />} />
      <Route path='/member-account' element={<MemberAccount />} />
      <Route path='/add-member' element={<AddMember />} />
      <Route path='/add-info' element={<AddInfo />} />
      <Route path='/component-library' element={<ComponentLibrary />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
