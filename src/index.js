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
import clubMemberData from "./Assets/content/club.json";

// for (let i = 0; i < clubMemberData.clubs.length; i++) {
//   let arrayPath = clubMemberData.clubs[i].path;
//   console.log(arrayPath);
// }

let arrayPath = clubMemberData.clubs.map((i) => i.path);
// console.log(arrayPath);
// console.log(arrayPath[0]);
// console.log(arrayPath[2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route index element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path={`/crew-lists` + arrayPath[0]} element={<CrewLists />} />
      <Route path={`/crew-lists` + arrayPath[2]} element={<CrewLists />} />
      <Route path={`/my-club` + arrayPath[0]} element={<MyClub />} />
      <Route path={`/my-club` + arrayPath[2]} element={<MyClub />} />
      <Route path='/site-information' element={<SiteInfo />} />
      <Route path={`/club-members` + arrayPath[0]} element={<ClubMembers />} />
      <Route path={`/club-members` + arrayPath[2]} element={<ClubMembers />} />
      <Route path={`/member-account` + arrayPath[0]} element={<MemberAccount />} />
      <Route path={`/member-account` + arrayPath[2]} element={<MemberAccount />} />
      <Route path={`/add-member` + arrayPath[0]} element={<AddMember />} />
      <Route path={`/add-member` + arrayPath[2]} element={<AddMember />} />
      <Route path={`/add-info` + arrayPath[0]} element={<AddInfo />} />
      <Route path={`/add-info` + arrayPath[2]} element={<AddInfo />} />
      <Route path='/component-library' element={<ComponentLibrary />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
